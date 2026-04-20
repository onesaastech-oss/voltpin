'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { HiMenu, HiUser } from 'react-icons/hi';
import { HiCheck, HiX, HiClock, HiBan } from 'react-icons/hi';
import { transactionAPI } from '../lib/api';
import ProtectedRoute from '../components/ProtectedRoute';

function PaymentStatusContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'pending' | 'success' | 'failed' | 'cancelled'>('pending');
  const [paymentDetails, setPaymentDetails] = useState({
    transactionId: '',
    orderId: '',
    paymentTime: '',
    amount: '',
    paymentMethod: '',
    note: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactionStatus = useCallback(async (clientTxnId: string, txnId: string) => {
    try {
      setIsLoading(true);
      console.log('Fetching transaction status:', { clientTxnId, txnId });
      
      // Use whichever ID is available - pass undefined if empty string
      const response = await transactionAPI.getTransactionStatus(
        clientTxnId || undefined,
        txnId || undefined
      );
      
      console.log('Transaction status response:', response.status);
      const responseData = await response.json();
      console.log('Transaction status data:', responseData);

      if (response.ok && responseData.success) {
        // API response structure: { success: true, data: { ... } }
        const tx = responseData.data;
        
        if (!tx) {
          console.error('Transaction data not found in response');
          setStatus('failed');
          toast.error('Transaction data not found.');
          return;
        }

        // Map status to our valid status types
        const txStatus = tx.status || 'pending';
        const validStatus = ['pending', 'success', 'failed', 'cancelled'].includes(txStatus)
          ? txStatus as 'pending' | 'success' | 'failed' | 'cancelled'
          : 'pending';
        setStatus(validStatus);
        
        // Map API response fields to payment details
        setPaymentDetails({
          transactionId: tx.transactionId || tx.providerReferenceId || clientTxnId || txnId || 'N/A',
          orderId: tx.merchantOrderId || tx.orderId || 'N/A',
          paymentTime: tx.createdAt || tx.updatedAt || new Date().toISOString(),
          amount: tx.amount ? `${tx.currency || 'INR'} ${tx.amount}` : 'N/A',
          paymentMethod: tx.paymentInstrument?.type || tx.paymentMethod || 'Online Payment',
          note: tx.paymentNote || tx.description || 'Wallet Recharge / Purchase',
        });
      } else {
        setStatus('failed');
        toast.error(responseData.message || 'Failed to fetch transaction status.');
      }
    } catch (error) {
      console.error('Error fetching transaction status:', error);
      setStatus('failed');
      toast.error('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Handle both client_txn_id and clientTrxId/clientTxnId parameter names
    const clientTxnId = searchParams.get('client_txn_id') || 
                       searchParams.get('clientTrxId') || 
                       searchParams.get('clientTxnId');
    const txnId = searchParams.get('txn_id') || searchParams.get('txnId');
    const statusParam = searchParams.get('status');

    console.log('Payment status page loaded with params:', { clientTxnId, txnId, statusParam });

    // Use whichever transaction ID is available
    const transactionId = clientTxnId || txnId;

    if (transactionId) {
      console.log('Calling fetchTransactionStatus with:', { clientTxnId, txnId });
      // Always pass client_txn_id format to API (server expects client_txn_id)
      fetchTransactionStatus(clientTxnId || '', txnId || '');
    } else if (statusParam) {
      // If status is provided directly in URL, use it
      const validStatus = ['pending', 'success', 'failed', 'cancelled'].includes(statusParam) 
        ? statusParam as 'pending' | 'success' | 'failed' | 'cancelled'
        : 'pending';
      setStatus(validStatus);
      setIsLoading(false);
    } else {
      console.log('No transaction ID or status param found');
      setStatus('pending');
      setIsLoading(false);
    }
  }, [searchParams, fetchTransactionStatus]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/,/g, '');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      {/* Header */}
      <header className="bg-[#2F6BFD] px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-white touch-manipulation">
          <HiMenu className="text-2xl" />
        </Link>
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </Link>
        <Link href="/profile" className="text-white touch-manipulation">
          <HiUser className="text-2xl" />
        </Link>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {isLoading ? (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[#2F6BFD] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Checking payment status...</p>
          </div>
        ) : (
          <>
            {/* Status Icon */}
            <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-lg mb-6 ${
              status === 'success' ? 'bg-[#2F6BFD]' :
              status === 'failed' ? 'bg-red-500' :
              status === 'cancelled' ? 'bg-gray-500' :
              'bg-yellow-500'
            }`}>
              {status === 'success' ? (
                <HiCheck className="text-white text-6xl" />
              ) : status === 'failed' ? (
                <HiX className="text-white text-6xl" />
              ) : status === 'cancelled' ? (
                <HiBan className="text-white text-6xl" />
              ) : (
                <HiClock className="text-white text-6xl" />
              )}
            </div>

            {/* Status Title */}
            <h1 className="text-black font-bold text-3xl mb-8">
              {status === 'success' ? 'Payment Successful' :
               status === 'failed' ? 'Payment Failed' :
               status === 'cancelled' ? 'Payment Cancelled' :
               'Payment Pending'}
            </h1>
          </>
        )}

        {/* Payment Details Card */}
        {!isLoading && (
          <div className="w-full max-w-md bg-[#2F6BFD] rounded-2xl shadow-lg p-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Transaction ID</span>
                <p className="text-white font-semibold text-base text-right">
                  {paymentDetails.transactionId}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Order ID</span>
                <p className="text-white font-semibold text-base text-right">
                  {paymentDetails.orderId !== 'N/A' ? paymentDetails.orderId : '---'}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Payment Time</span>
                <p className="text-white font-semibold text-base text-right">
                  {formatDate(paymentDetails.paymentTime)}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Amount</span>
                <p className="text-white font-semibold text-base text-right">
                  {paymentDetails.amount}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Payment Method</span>
                <p className="text-white font-semibold text-base text-right capitalize">
                  {paymentDetails.paymentMethod}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm">Note</span>
                <p className="text-white font-semibold text-base text-right">
                  {paymentDetails.note}
                </p>
              </div>
          </div>
        </div>
        )}

        {/* Action Buttons */}
        {!isLoading && (
          <div className="w-full max-w-md flex gap-4">
          {status === 'success' ? (
            <>
              <Link
                href="/topup"
                className="flex-1 bg-[#2F6BFD] text-white py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-[#2563eb] hover:bg-[#2563eb] transition-colors touch-manipulation text-center"
              >
                Top Up Again
              </Link>
              <Link
                href="/"
                className="flex-1 bg-white border-2 border-[#2F6BFD] text-[#2F6BFD] py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-gray-50 hover:bg-gray-50 transition-colors touch-manipulation text-center"
              >
                Back To Home
              </Link>
            </>
          ) : status === 'pending' ? (
            <>
              <Link
                href="/"
                className="flex-1 bg-[#2F6BFD] text-white py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-[#2563eb] hover:bg-[#2563eb] transition-colors touch-manipulation text-center"
              >
                Back To Home
              </Link>
              <Link
                href="/history"
                className="flex-1 bg-white border-2 border-[#2F6BFD] text-[#2F6BFD] py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-gray-50 hover:bg-gray-50 transition-colors touch-manipulation text-center"
              >
                Check Status
              </Link>
            </>
          ) : status === 'cancelled' ? (
            <>
              <Link
                href="/topup"
                className="flex-1 bg-[#2F6BFD] text-white py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-[#2563eb] hover:bg-[#2563eb] transition-colors touch-manipulation text-center"
              >
                Try Again
              </Link>
              <Link
                href="/"
                className="flex-1 bg-white border-2 border-[#2F6BFD] text-[#2F6BFD] py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-gray-50 hover:bg-gray-50 transition-colors touch-manipulation text-center"
              >
                Back To Home
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/topup"
                className="flex-1 bg-[#2F6BFD] text-white py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-[#2563eb] hover:bg-[#2563eb] transition-colors touch-manipulation text-center"
              >
                Try Again
              </Link>
              <Link
                href="/social"
                className="flex-1 bg-white border-2 border-[#2F6BFD] text-[#2F6BFD] py-3.5 rounded-lg font-semibold text-base shadow-md active:bg-gray-50 hover:bg-gray-50 transition-colors touch-manipulation text-center"
              >
                Contact Us
              </Link>
            </>
          )}
        </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentStatus() {
  return (
    <ProtectedRoute>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-gray-500">Loading...</div>
        </div>
      }>
        <PaymentStatusContent />
      </Suspense>
    </ProtectedRoute>
  );
}


