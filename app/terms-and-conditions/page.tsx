'use client';

import Link from 'next/link';

const sections = [
  {
    title: 'Acceptance of Terms',
    content:
      'By accessing or using our website and services, you agree to comply with and be bound by these terms and conditions.',
  },
  {
    title: 'User Eligibility',
    content:
      'Users must be at least 13 years old to use our services. By using our services, you confirm that you meet this age requirement.',
  },
  {
    title: 'Account Information',
    content:
      'Users are responsible for maintaining the confidentiality of their account information, including login credentials. Any activity conducted under your account is your responsibility.',
  },
  {
    title: 'In-Game Purchases',
    content:
      'In-game purchases are subject to our refund policy. Users are solely responsible for all transactions made through their accounts.',
  },
  {
    title: 'Intellectual Property',
    content:
      'All content on our website, including but not limited to text, graphics, logos, and images, is the property of Voltpin and is protected by intellectual property laws.',
  },
  {
    title: 'Prohibited Activities',
    content:
      'Users must not engage in any unlawful or prohibited activities, including but not limited to hacking, data mining, or any actions that could disrupt the integrity of our services.',
  },
  {
    title: 'Third-Party Links',
    content:
      'Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites and encourage users to review their terms and conditions.',
  },
  {
    title: 'Disclaimer of Warranties',
    content:
      'Our services are provided "as is" without any warranty. We do not guarantee the accuracy, completeness, or reliability of our services.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'Voltpin and its affiliates are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services.',
  },
  {
    title: 'Modification of Terms',
    content:
      'We reserve the right to modify these terms and conditions at any time. Users will be notified of significant changes.',
  },
  {
    title: 'Contact Information',
    content:
      'For inquiries related to these terms and conditions, please contact us at voltpin.in@gmail.com',
  },
];

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      {/* Header */}
      <header className="bg-[#2F6BFD] px-4 py-6 flex flex-col items-center relative">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Link href="/" className="text-white touch-manipulation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mt-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 9H9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm sm:text-base text-white/90 max-w-md">
            Please read the following terms carefully before using our website and services.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 bg-white px-4 py-6 space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#2F6BFD] rounded-lg flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">{index + 1}</span>
              </div>
              <h2 className="text-gray-900 font-bold text-base">{section.title}</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pl-11">{section.content}</p>
          </div>
        ))}

        {/* Agreement Banner */}
        <div className="bg-[#2F6BFD] rounded-2xl p-4 text-center">
          <p className="text-white text-sm leading-relaxed">
            By using our website and services, you agree to abide by these terms and conditions. If you do not agree
            with any part of these terms, please refrain from using our services.
          </p>
        </div>

        {/* Privacy Policy Link */}
        <div className="text-center pb-2">
          <Link
            href="/privacy-policy"
            className="text-[#2F6BFD] text-sm font-semibold underline underline-offset-2 touch-manipulation"
          >
            View Privacy &amp; Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
