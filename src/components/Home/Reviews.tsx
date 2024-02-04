'use client';
import './style.css';
import Image from 'next/image';
import React, { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

function Reviews() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div id='reviews-section' className='bg-[#174A44] mt-12 py-9'>
        <div
          className='bg-[#174A44] text-gray-100 text-4xl font-bold text-center pt-6 
       '
        >
          What our customer says?
        </div>
        <div className='navigation-wrapper'>
          <div
            ref={sliderRef}
            className='keen-slider text-center italic '
          >
            <div className='keen-slider__slide'>
              <Image
                src='/images/customer-1.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5  text-gray-100'>
                John D.
              </h2>
              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  WToolkit has significantly improved my contact
                  management. The blurring feature ensures privacy,
                  and the hover display is a neat touch. The free
                  version is handy, but I upgraded to premium for
                  unlimited downloads, and it&apos;s been worth it.
                  The interface is user-friendly, though a few more
                  customization options would be great.
                </span>
              </p>
            </div>
            <div className='keen-slider__slide '>
              <Image
                src='/images/customer-2.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5 text-gray-100'>
                Daniel W.
              </h2>
              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  This toolkit is a lifesaver! Extracting contacts
                  from groups is a breeze, and the premium
                  version&apos;s ability to download any file format
                  is a game-changer. The interface mirrors
                  WhatsApp&apos;s design, making it visually seamless.
                  Five stars for a tool that truly enhances user
                  control and convenience.
                </span>
              </p>
            </div>
            <div className='keen-slider__slide '>
              <Image
                src='/images/customer-3.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5 text-gray-100'>
                Sophia L.
              </h2>
              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  The blurring feature works well, and the hover
                  display is a cool addition. However, I found the
                  interface a bit confusing initially. The free
                  version is useful for basic needs, but the
                  30-contact limit is restrictive. Could use some
                  improvement, but overall a decent tool.
                </span>
              </p>
            </div>
            <div className='keen-slider__slide '>
              <Image
                src='/images/customer-4.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5 text-gray-100'>
                Max C.
              </h2>
              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  WToolkit is a must-have! The interface is intuitive,
                  and the blurring feature provides an extra layer of
                  security. I appreciate the versatile download
                  options. Whether you opt for the free version or go
                  premium, it&apos;s a valuable tool for efficient
                  contact management.
                </span>
              </p>
            </div>
            <div className='keen-slider__slide '>
              <Image
                src='/images/customer-5.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5 text-gray-100'>
                Elena P.
              </h2>

              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  The blurring feature is effective, but I found the
                  hover display a bit too sensitive for my liking.
                  Extracting contacts from groups is straightforward,
                  and the interface is visually cohesive with
                  WhatsApp. Considering an upgrade to premium for
                  additional features.
                </span>
              </p>
            </div>
            <div className='keen-slider__slide '>
              <Image
                src='/images/customer-6.jpg'
                className='rounded-full   ring ring-white mx-auto mt-6'
                alt='customer image'
                width={50}
                height={50}
              />
              <h2 className='text-xl font-bold mt-5 text-gray-100'>
                Jake M.
              </h2>

              <p className=' max-w-5xl  mx-auto lg:px-0  my-4'>
                <span className=' bg-[#ffffff05] p-2 rounded-xl text-sm  text-left text-gray-300'>
                  WToolkit has made contact organization a breeze. The
                  blurring function ensures privacy, and the hover
                  display adds a nice touch. The free version suits my
                  needs, and the premium features are tempting for
                  future upgrades. A reliable tool for managing
                  contacts seamlessly.
                </span>
              </p>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className='dots'>
            {[
              ...Array(
                instanceRef.current.track.details.slides.length
              ).keys(),
            ].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    'dot' + (currentSlide === idx ? ' active' : '')
                  }
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabled}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  );
}

export default Reviews;
