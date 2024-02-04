import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className='container py-16 '>
      <div className='xl:w-[70%] lg:w-[90%] mx-auto space-y-6'>
        <h1 className='text-3xl font-semibold text-gray-800 text-center'>
          Privacy Policy for WToolKit Chrome Extension
        </h1>

        <div className=''>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Overview:
          </h2>
          <p className='leading-[1.4] text-gray-800'>
            WToolKit is committed to ensuring the privacy and security
            of our users. This Privacy Policy outlines the information
            we may collect and how it will be used when you use our
            Chrome extension, WToolKit Chrome Extension.
          </p>
        </div>
        <div className=''>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Information Collection:
          </h2>

          <p>
            We do not collect any user data other than payment
            information. The payment process for the pro version of
            WToolKit Chrome Extension is handled by Stripe through
            extpay.js from extensionpay.com. Please refer to Stripe's
            privacy policy for information on how they collect and
            process payment details.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            How We Use Your Information:
          </h2>

          <p className='leading-[1.4] text-gray-800'>
            As we do not collect any other user data, we do not use or
            store any information beyond the payment details processed
            by Stripe. Stripe handles all aspects of payment
            processing, ensuring a secure and seamless transaction
            experience.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Data Security:
          </h2>

          <p className='leading-[1.4] text-gray-800'>
            We do not have access to or share any personally
            identifiable information beyond payment data. Stripe's
            privacy policy governs the handling of payment data.
          </p>
        </div>
        <div className='py-5'>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Information Sharing:
          </h2>
          <p className='leading-[1.4] text-gray-800'>
            We do not have access to or share any personally
            identifiable information related to payment. Stripe's
            privacy policy governs the handling of payment data.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Changes to This Privacy Policy:
          </h2>

          <p className='leading-[1.4] text-gray-800'>
            We reserve the right to update or change our Privacy
            Policy at any time. Please check this Privacy Policy
            periodically. Your continued use of the extension after
            any modifications constitutes acknowledgment and consent
            to abide by the modified Privacy Policy.
          </p>
        </div>
        <div>
          <h2 className='text-xl font-[500] text-gray-800 mb-2'>
            Contact Us:
          </h2>
          <p className='leading-[1.4] text-gray-800'>
            If you have any questions or concerns regarding this
            Privacy Policy, please contact us at{' '}
            <a
              href='mailto:sahasrakoppala@gmail.com'
              className='px-1 font-bold text-blue-600'
            >
              sahasrakoppala@gmail.com
            </a>
            . This Privacy Policy was last updated on 31 January 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
