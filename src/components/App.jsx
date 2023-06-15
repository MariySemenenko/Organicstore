import React from 'react';
import { Header } from "./Header/Header";
import { HeartIconModal } from './HeartIconModal/HeartIconModal'


export const App = () => {
  return (
    <div>
      <Header >
        <HeartIconModal />
      </Header>
    </div>
  );
};
