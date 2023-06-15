import { useState } from 'react';
import { Modal } from '../Modal/Modal'; 
import { Li } from '../Styled.styled'

export const WishlistModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    <Li onClick={openModal}>Whishlist</Li>

    {isOpen && (
      <Modal onClose={closeModal}>
        <h1>Modal Content</h1>
        <p>This is the content of the modal.</p>
      </Modal>
    )}
  </>
  );
};


