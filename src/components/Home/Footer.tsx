import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='mt-24 bg-[#242B35] py-8'>
        <div className='flex justify-around '>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-gray-700 '>
              <span className='px-1 text-green-600'>WToolkit</span>
            </h1>
            <h2 className='font-bold text-xl mt-2 mb-6 text-white'>
              Support
            </h2>
            <ul className='text-sm items-center text-white/70'>
              <li className='hover:text-emerald-500  cursor-pointer'>
                <a href='mailto:sahasrakoppala@gmail.com'>
                  sahasrakoppala@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <h2 className='font-bold text-xl mb-4 text-white'>
              Pages
            </h2>
            <ul className='text-sm space-y-2  items-center text-white/70'>
              <li className='hover:text-emerald-500 cursor-pointer'>
                <Link href={'/pricing'}> pricing</Link>
              </li>
              <li className='hover:text-emerald-500 cursor-pointer'>
                <Link href={'/contact'}>contact</Link>
              </li>
              <li className='hover:text-emerald-500 cursor-pointer'>
                <Link href={'/privacy-policy'}>privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className='text-center '>
            <h2 className='font-bold text-xl mb-4 text-white'>
              Company
            </h2>
            <ul className='text-sm space-y-2  text-white/70'>
              <li className='hover:text-emerald-500 cursor-pointer'>
                <a href='/#reviews-section'>Customer toughts</a>
              </li>

              <li className='hover:text-emerald-500 cursor-pointer'>
                <a href='/#product-advantages-featurs'>
                  See our product features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='text-center pb-4 text-sm bg-[#242B35] text-white/50 max-w-full '>
        <p>
          The materials on this site are protected by copyright law.
          Copyright © 2024 WAToolkit. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
Footer;
