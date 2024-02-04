import React from 'react';
import PropTypes from 'prop-types';

const page = () => {
  return (
    <>
      <div className='bg-emerald-200 py-24'>
        <div className='max-w-4xl mx-auto lg:px-0'>
          <div className=''>
            <h2 className='text-6xl font-bold text-center mt-16 text-gray-700'>
              Simple and Affordable pricing for everyone.
            </h2>
            <h3 className='text-4xl font-bold text-center my-8 text-gray-700'>
              Straight forward and up front pricing plans designed to
              suit teams of any size
            </h3>
            <p className='my-8 text-center text-gray-600'>
              Your plan will be activated automatically based on the
              WhatsApp Number you provide while checking out, however
              if it doesn’t get activated, kindly contact our Support,
              and they’ll activate it.
            </p>
          </div>
        </div>
      </div>

      <div>
        <section className='text-gray-600 body-font overflow-hidden'>
          <div className='container px-5 pt-16 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='sm:text-4xl text-4xl font-bold title-font mb-2 text-gray-900'>
                Choose a plan
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
                If you want to enjoy more features choose a plan.
              </p>
            </div>
            <div className='flex flex-wrap justify-center -m-4'>
              <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
                <div className='h-full bg-emerald-100 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
                  <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                    START
                  </h2>
                  <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                    <span>FREE</span>
                  </h1>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    Extraction of contacts
                  </p>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    TXT file download
                  </p>

                  <button className='flex items-center mt-auto bg-emerald-500 hover:bg-emerald-700 rounded-full text-white  border-0 py-2 px-4 w-full focus:outline-none'>
                    Subscribe
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-auto'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7' />
                    </svg>
                  </button>
                  {/* <p className='text-xs text-gray-500 mt-3'>
                    Literally you probably haven&apos;t heard of them
                    jean shorts.
                  </p> */}
                </div>
              </div>
              <div className='p-4 xl:w-1/4 md:w-1/2 w-full'>
                <div className='h-full bg-emerald-200 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden'>
                  <h2 className='text-sm tracking-widest title-font mb-1 font-medium'>
                    PRO
                  </h2>
                  <h1 className='text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                    <span>$11</span>
                    <span className='text-lg ml-1 font-normal text-gray-500'>
                      /mo
                    </span>
                  </h1>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    Extraction of contacts
                  </p>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    TXT file download
                  </p>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    30+ contact extraction
                  </p>
                  <p className='flex items-center text-gray-600 mb-2'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    CSV and VCF file download
                  </p>
                  <p className='flex items-center text-gray-600 '>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    Blurring of information
                  </p>
                  <p className='flex items-center text-gray-600 mb-6'>
                    <span className='w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2.5'
                        className='w-3 h-3 bg-emerald-500'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                    </span>
                    Customize apperance
                  </p>
                  <button className='flex items-center mt-auto text-white bg-emerald-500 hover:bg-emerald-700 rounded-full border-0 py-2 px-4 w-full focus:outline-none '>
                    Subscribe
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-auto'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7' />
                    </svg>
                  </button>
                  {/* <p className='text-xs text-gray-500 mt-3'>
                    Literally you probably haven&apos;t heard of them
                    jean shorts.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
page.defaultProps = {
  theme: 'indigo',
};

page.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default page;
