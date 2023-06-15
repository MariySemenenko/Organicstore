import React from 'react';
import { Header } from "./Header/Header";
import { WishlistModal } from './WishlistModal/WishlistModal'


export const App = () => {
  return (
    <div>
      <Header >
        <WishlistModal />
      </Header>
    </div>
  );
};
