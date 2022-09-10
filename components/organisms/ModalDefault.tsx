import { Modal } from 'flowbite-react';
import React, { useCallback, useState } from 'react';
import Button from '../atoms/button/Button';
import Paragraph from '../atoms/typography/Paragraph';

type PropsType = {
  title: string;
  text1?: string;
  text2?: string;
};

const ModalDefault: React.FC<PropsType> = ({ title, text1, text2 }) => {
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
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-8">
            <Paragraph content={text1} />
            <Paragraph content={text2} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            buttonLabel="I accep"
            color="success"
            size="sm"
            handleFn={() => alert('Accepted!!!')}
            gradientDuoTone="purpleToBlue"
          />
          <Button
            buttonLabel="Decline"
            color="warning"
            size="sm"
            handleFn={closeModal}
            gradientDuoTone="tealToLime"
          />
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalDefault;
