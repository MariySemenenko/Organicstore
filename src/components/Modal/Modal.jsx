import React from 'react';
//import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import { Modalbackdrop, Modalcontent, Modalclose, } from '../Styled.styled'

const modalRoot = document.getElementById('modal-root'); 

export const Modal = ({ onClose, children }) => {

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  

  return createPortal(
    <Modalbackdrop onClick={handleBackdropClick}>
      <Modalcontent>
        <Modalclose onClick={onClose}>
          &times;
        </Modalclose>
        {children}
      </Modalcontent>
    </Modalbackdrop>,
    modalRoot
  );
};
