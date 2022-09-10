import { Modal } from 'flowbite-react';
import React, { useCallback, useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import Button from '../atoms/button/Button';
import Heading3 from '../atoms/typography/Heading3';

const ModalPopup: React.FC<{
  confirmMessage: string;
}> = ({ confirmMessage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <React.Fragment>
      <Button
        buttonLabel="Toggle modal"
        color="success"
        size="md"
        handleFn={openModal}
        gradientDuoTone="purpleToBlue"
      />
      <Modal show={isOpen} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <Heading3 title={confirmMessage} />
            <div className="flex justify-center gap-4">
              <Button
                buttonLabel="yes, I'm sure"
                size="sm"
                color="success"
                handleFn={() => alert('Confirmed!!!')}
                gradientDuoTone="purpleToBlue"
              />
              <Button
                buttonLabel="No, cancel"
                color="warning"
                size="md"
                handleFn={closeModal}
                gradientDuoTone="tealToLime"
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModalPopup;
