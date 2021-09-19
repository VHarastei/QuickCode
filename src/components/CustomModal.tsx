import React from 'react';
import Modal from 'react-modal';

type PropsType = {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  shouldCloseOnOverlayClick?: boolean;
  maxWidth?: number;
};

export const CustomModal: React.FC<PropsType> = ({
  children,
  isOpen,
  setIsOpen,
  shouldCloseOnOverlayClick = true,
  maxWidth = 768,
}) => {
  const customStyles = {
    overlay: {
      zIndex: 1,
      backgroundColor: '#00000055',
    },
    content: {
      maxWidth: `${maxWidth}px`,
      width: '100%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
    },
  };

  return (
    <Modal
      closeTimeoutMS={150}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};
