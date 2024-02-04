'use client';
import React, { useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export default function UpdateModal({
  isOpen,
  onOpenChange,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}) {
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='px-3 py-4'>
          {onClose => (
            <>
              <ModalBody className='gap-0'>
                <h2 className='text-sm mb-1 font-bold text-yellow-600'>
                  Important Notice:
                </h2>
                <h3 className='text-xl mb-3 leading-[1.1] font-semibold text-gray-800'>
                  Temporary Unavailability of Download
                </h3>

                <p className='text-gray-800'>
                  Exciting updates are on the way for
                  <span className='text-green-800 px-1 font-semibold'>
                    WToolkit
                  </span>
                  ! During this enhancement phase, the download is
                  temporarily unavailable. Stay tuned for the revamped
                  version! Thank you for your patience.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='primary'
                  variant='solid'
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
