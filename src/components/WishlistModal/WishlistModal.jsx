import { useState } from 'react';
import { Modal } from '../Modal/Modal'; 
import { Li, H1wishlist, Heart, Backgraund } from '../Styled.styled'
import { AnimatedImages } from '../AnimatedImages/AnimatedImages'
import HeartIcon from '../icons/heart5.png'

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
        <H1wishlist>Save the products you like<Heart src={HeartIcon} alt="Heart Icon" /></H1wishlist>
        </Backgraund>
        <AnimatedImages />
      </Modal>
    )}
  </>
  );
};


