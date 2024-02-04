import React from 'react';

function Navbar() {
  return (
    <nav
      id='navbar-section'
      className='bg-emerald-600 sticky top-0 z-10 p-4'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='text-white font-bold text-lg'>
            <a href='/' className='text-white'>
              WToolkit
            </a>
          </div>
          <div className='space-x-4'>
            <a href='/' className='text-white'>
              Home
            </a>

            <a href='contact' className='text-white'>
              Contact
            </a>
            <a
              href='pricing'
              className='hover:text-white hover:border border hover:bg-emerald-600 hover:border-white duration-100 bg-white text-emerald-600   px-2 py-1.5 rounded-lg'
            >
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
