'use client';
import HeroSection from '@/components/Home/HeroSection';
import Reviews from '@/components/Home/Reviews';
import CTASection from '@/components/Home/CTASection';
import PremiumFeatures from '@/components/Home/PremiumFeatures';
import UpdateModal from '@/components/Home/UpdateModal';
import { useDisclosure } from '@nextui-org/react';

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <main>
        <HeroSection onDownload={onOpen} />
        <PremiumFeatures />
        <Reviews />
        <CTASection />

        <a
          href='#hero-section'
          className='w-[50px] inline-block h-[50px] text-white text-xl cursor-pointer flex justify-center items-center fixed bottom-7 right-8 rounded-full bg-emerald-600'
        >
          &uarr;
        </a>
      </main>
      <UpdateModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
