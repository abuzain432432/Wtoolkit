import React from 'react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <div className=' max-w-5xl mx-auto lg:px-0 mt-24'>
      <div className='flex items-center  bg-emerald-300 rounded-xl border'>
        <div className='w-1/2 '>
          <Image
            src='/images/cta.jpg'
            className='  rounded-md'
            alt='customer image'
            width={512}
            height={512}
            priority={true}
          />
        </div>
        <div className=' w-1/2'>
          <div className='mt-8 max-w-sm mx-auto '>
            {/* <p className="font-bold text-emerald-950 drop-shadow-md">
              30% Discount
            </p> */}
            <h2 className=' text-center xl:text-4xl md:text-4xl sm:text-2xl font-bold  text-emerald-900'>
              Protect your WhatsApp privacy
            </h2>
            <p className='mt-12 text-sm text-center'>
              Protect sensitive information by blurring contact names,
              photos, recent messages, and conversations. Non-blurred
              details appear on hover, creating a dynamic and
              user-friendly interface.
            </p>
            <div className='flex justify-center mt-6'>
              <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold   py-1 px-4 border border-emerald-700 rounded '>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
