import React from 'react';
import { Header } from './Header/Header';
import { WishlistModal } from './WishlistModal/WishlistModal';
//import { AnimatedImages } from './AnimatedImages/AnimatedImages'

export const App = () => {
  return (
    <div>
      <Header>
        <WishlistModal />
      </Header>
    </div>
  );
};


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Header } from "./Header/Header";
// //import { WishlistModal } from './WishlistModal/WishlistModal'
// import { WishlistPage } from './wishlistPage/WishlistPage'

// export const App = () => {
//   return (
//     <Router>
//     <Routes>
//       <Route path="/" element={<Header />} >
//       <Route index element={<Header />} />
//       {/* Маршрут для сторінки "Whishlist" */}
//       <Route path="/whishlist" element={<WishlistPage />} />
//               {/* <WishlistModal /> */}
            
//         </Route>
//       </Routes>
//       </Router>
     
    
//   )
// }