'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Social() {
  const router = useRouter();
  const contactPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/voltpin.in?igsh=MXJneWM0NHlvdXl0cw',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/share/1CkNP65eez/',
    },
    {
      id: 'email',
      name: 'voltpin.in@gmail.com',
      icon: FaEnvelope,
      href: 'mailto:voltpin.in@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Blue Section - 50% */}
      <div className="h-[50vh] min-h-[280px] bg-[#2F6BFD] flex flex-col items-center justify-start pt-8 sm:pt-12 relative px-4 shrink-0">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push('/');
              }
            }}
            className="text-white touch-manipulation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Title */}
        <div className="text-center text-white px-4 mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Connect With Us!</h1>
          <p className="text-sm sm:text-base text-white/90 max-w-md">
            Follow us and contact support using our official social links, WhatsApp, and email.
          </p>
        </div>
      </div>

      {/* Bottom White Section - 50% */}
      <div className="flex-1 bg-white relative min-h-[calc(100vh-50vh+150px)] pb-20 pt-[200px] sm:pt-[220px]">
        {/* White Card Overlay - Half on blue, half on white */}
        <div className="absolute top-[-180px] sm:top-[-200px] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-full max-w-md">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
            {/* Heading */}
            <h2 className="text-black font-bold text-xl sm:text-2xl mb-6">Our Social Platforms</h2>

            {/* Social Media Buttons */}
            <div className="space-y-3">
              {contactPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={platform.id}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#2F6BFD] text-white py-4 px-4 rounded-xl flex items-center gap-4 shadow-md active:bg-[#2563eb] hover:bg-[#2563eb] transition-colors touch-manipulation"
                  >
                    <IconComponent className="text-white text-2xl shrink-0" />
                    <span className="text-white font-semibold text-base flex-1 text-left">{platform.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

