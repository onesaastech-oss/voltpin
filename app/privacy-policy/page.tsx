'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const sections = [
  {
    title: 'Information Collection',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'We collect personal information, including but not limited to, name, email address, and payment details, solely for the purpose of processing in-game purchases and providing a personalized gaming experience.',
  },
  {
    title: 'Usage of Information',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'Personal information is used to facilitate transactions, deliver purchased in-game items, and enhance user experience within the game.',
  },
  {
    title: 'Data Security',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 3 18 3 11V5L12 2L21 5V11C21 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'We employ industry-standard security measures to protect user data against unauthorized access, disclosure, alteration, or destruction.',
  },
  {
    title: 'Third-Party Services',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="5" r="3" stroke="white" strokeWidth="2"/>
        <circle cx="6" cy="12" r="3" stroke="white" strokeWidth="2"/>
        <circle cx="18" cy="19" r="3" stroke="white" strokeWidth="2"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    content:
      'We may use third-party services for payment processing and analytics, and users are encouraged to review the privacy policies of these services.',
  },
  {
    title: 'Cookies',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
        <path d="M12 8V12L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'Our website uses cookies to enhance user experience. Users can manage cookie preferences through their browser settings.',
  },
  {
    title: 'User Consent',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22 4 12 14.01 9 11.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'By using our website and making in-game purchases, users consent to the collection, processing, and storage of their personal information in accordance with this privacy policy.',
  },
  {
    title: "Children's Privacy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. Parents or legal guardians are responsible for ensuring that minors do not submit personal information.",
  },
  {
    title: 'Data Retention',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="white" strokeWidth="2"/>
        <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12" stroke="white" strokeWidth="2"/>
        <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    content:
      'We retain user data for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.',
  },
  {
    title: 'Communication',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'Users may receive occasional emails related to their in-game purchases, updates, and promotional offers. Users can opt out of promotional communications.',
  },
  {
    title: 'Policy Changes',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="1 4 1 10 7 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3.51 15C4.15 16.8 5.42 18.31 7.08 19.27C8.74 20.23 10.69 20.59 12.6 20.28C14.5 19.97 16.24 18.99 17.5 17.51C18.75 16.04 19.44 14.17 19.44 12.22C19.44 10.27 18.75 8.4 17.5 6.93C16.24 5.45 14.5 4.47 12.6 4.16C10.7 3.85 8.76 4.21 7.1 5.17C5.43 6.13 4.16 7.64 3.52 9.44L3.51 9.45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'We reserve the right to update or modify the privacy policy at any time. Users will be notified of any changes.',
  },
  {
    title: 'Contact Information',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3528 21.3992C21.1482 21.5857 20.9071 21.7262 20.6447 21.8117C20.3822 21.8972 20.1044 21.9257 19.83 21.895C16.7425 21.5356 13.787 20.5301 11.19 18.96C8.77 17.5546 6.72 15.5061 5.32 13.09C3.75 10.493 2.74 7.537 2.385 4.45C2.354 4.175 2.383 3.898 2.468 3.635C2.554 3.373 2.694 3.132 2.881 2.927C3.067 2.723 3.296 2.559 3.551 2.448C3.806 2.336 4.081 2.279 4.36 2.28H7.36C8.045 2.28 8.703 2.551 9.192 3.032C9.681 3.513 9.961 4.164 9.97 4.85C10.001 5.414 10.124 5.969 10.333 6.49C10.542 7.011 10.833 7.492 11.195 7.91C11.456 8.222 11.646 8.59 11.75 8.985C11.854 9.38 11.871 9.792 11.798 10.192C11.725 10.592 11.565 10.971 11.33 11.3C11.095 11.629 10.793 11.9 10.444 12.092C10.095 12.285 9.709 12.394 9.31 12.413C8.664 12.423 8.033 12.223 7.51 11.845" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    content:
      'For any privacy-related concerns or questions, users can contact us at voltpin.in@gmail.com',
  },
];

export default function PrivacyPolicy() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col bg-white pb-20">
      {/* Header */}
      <header className="bg-[#2F6BFD] px-4 py-6 flex flex-col items-center relative">
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

        {/* Icon */}
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mt-8">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C12 22 3 18 3 11V5L12 2L21 5V11C21 18 12 22 12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Privacy &amp; Policy</h1>
          <p className="text-sm sm:text-base text-white/90 max-w-md">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
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
                {section.icon}
              </div>
              <h2 className="text-gray-900 font-bold text-base">{section.title}</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed pl-11">{section.content}</p>
          </div>
        ))}

        {/* Agreement Banner */}
        <div className="bg-[#2F6BFD] rounded-2xl p-4 text-center">
          <p className="text-white text-sm leading-relaxed">
            By using our website and services, users agree to the terms outlined in this privacy policy.
          </p>
        </div>

        {/* Terms Link */}
        <div className="text-center pb-2">
          <Link
            href="/terms-and-conditions"
            className="text-[#2F6BFD] text-sm font-semibold underline underline-offset-2 touch-manipulation"
          >
            View Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
