import { useState } from 'react';
import { Modal } from '../Modal/Modal'; 
import { Li, H1wishlist, Heartmodal, Backgraund } from '../Styled.styled'
import { AnimatedImages } from '../AnimatedImages/AnimatedImages'
import HeartIcon from '../icons/heartwhite.png'

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
        <Backgraund>
        <H1wishlist>My Wishlist!</H1wishlist>
        <H1wishlist>Save the products you like<Heartmodal src={HeartIcon} alt="Heart Icon" /></H1wishlist>
        </Backgraund>
        <AnimatedImages />
      </Modal>
    )}
  </>
  );
};


