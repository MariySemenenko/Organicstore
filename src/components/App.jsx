// import React from 'react';
// import { Header } from './Header/Header';
// import { WishlistModal } from './WishlistModal/WishlistModal';


// export const App = () => {
//   return (
//     <div>
//       <Header>
//         <WishlistModal />
//       </Header>
//     </div>
//   );
// };

///////////////////////////////////////////////////////////

import React from 'react';
import { Header } from './Header/Header';
//import { WishlistModal } from './WishlistModal/WishlistModal';
import { Routes, Route } from "react-router-dom";
import { WishlistPage } from '../pages/wishlistPage/WishlistPage';

export const App = () => {
  return (
   
//  <div> 
//         <Header>
//         <WishlistModal />
//        </Header>
//     </div> 




      <Routes>
        <Route path="/" element={<Header />}/>
          {/* <Route index element={<WishlistModal />} /> */}
          {/* Маршрут для сторінки "Whishlist" */}
          <Route path="/whishlist" element={<WishlistPage />} />
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
   
  );
};






