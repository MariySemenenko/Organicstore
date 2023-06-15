import { Heart } from 'components/Styled.styled';

import HeartIcon from '../icons/heart5.png'
import { useState } from 'react';
import { Modal } from '../Modal/Modal'; 

export const HeartIconModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Heart onClick={openModal} src={HeartIcon} alt="Heart Icon" />
      {isOpen && (
        <Modal onClose={closeModal}>
            <h1>Modal Content</h1>
          <p>This is the content of the modal.</p>
        </Modal>
      )}
    </>
  );
};
