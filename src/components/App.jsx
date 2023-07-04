import { Header } from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { WishlistPage } from '../pages/wishlistPage/WishlistPage';
import { ProductList } from 'featchProductList';




export const App = () => {


  return (
  <>
    <Routes>
      <Route path="/" element={<Header />} />
      {/* <Route index element={<WishlistModal />} /> */}
      {/* Маршрут для сторінки "Whishlist" */}
      <Route path="/whishlist" element={<WishlistPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      
    </Routes>
    {/* { <ProductList />} */}
    </>
  );
};
