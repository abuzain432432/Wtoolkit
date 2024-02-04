import React from 'react';

const PremiumFeatures = () => {
  return (
    <>
      <div className='max-w-5xl mx-auto lg:px-0 mt-16'>
        <div className='flex items-center text-gray-700'>
          <div className='w-1/2 text-center'>
            <h2 className='text-4xl font-bold'>
              You are all set for using WToolkit!
            </h2>
            <p className='mt-10'>
              <span className='font-bold'> FREE VS PREMIUM</span>
              <br />
              Plan Comparison
            </p>
            <br />
            <button
              type='submit'
              className='bg-emerald-600 text-white px-4 py-2  rounded-md hover:bg-emerald-900'
            >
              &rarr; Pricing
            </button>
          </div>
          <div className='w-1/2 max-w-6xl mx-16 font-[sans-serif] text-[#333] bg-emerald-300'>
            <div className=''>
              <table className='w-full border border-collapse min-w-auto'>
                <thead>
                  <tr>
                    <th className='p-4 text-left border max-w-auto'>
                      <h3 className='font-bold text-xl'>Features</h3>
                    </th>
                    <th className='p-4 text-center border max-w-auto'>
                      <h3 className='font-bold text-xl'>Free</h3>
                    </th>
                    <th className='p-4 text-center border max-w-auto'>
                      <h3 className='font-bold text-xl'>Premium</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className='border text-sm'>
                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>
                        {' '}
                        Extraction of contacts
                      </p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>TXT file download</p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>
                        30 plus contacts extraction
                      </p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        className='fill-red-500 inline'
                        viewBox='0 0 320.591 320.591'
                      >
                        <path
                          d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                          data-original='#000000'
                        />
                        <path
                          d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>

                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>
                        CSV and VCF file download
                      </p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        className='fill-red-500 inline'
                        viewBox='0 0 320.591 320.591'
                      >
                        <path
                          d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                          data-original='#000000'
                        />
                        <path
                          d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>
                        Blurring of information
                      </p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        className='fill-red-500 inline'
                        viewBox='0 0 320.591 320.591'
                      >
                        <path
                          d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                          data-original='#000000'
                        />
                        <path
                          d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className='p-4 text-left border max-w-auto'>
                      <p className=' text-base'>
                        Customize apperance
                      </p>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        className='fill-red-500 inline'
                        viewBox='0 0 320.591 320.591'
                      >
                        <path
                          d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                          data-original='#000000'
                        />
                        <path
                          d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                    <td className='p-4 text-center border max-w-auto'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        className='fill-green-500 inline'
                        viewBox='0 0 24 24'
                      >
                        <path
                          d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
                          data-original='#000000'
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumFeatures;
