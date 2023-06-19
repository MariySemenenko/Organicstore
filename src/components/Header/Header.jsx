import {
  Truck,
  Nav,
  Ul,
  H1,
  Number,
  Line,
  Img,
  Li,
  Heart,
  H2,
  None,
  User,
  Arrow,
  HeaderContainer,
} from 'components/Styled.styled';

import leterIcon from '../icons/email.png';
import UserIcon from '../icons/user.png';
import HeartIcon from '../icons/heart1.png'
import TruckIcon from '../icons/truck.png'
import ArrowIcon from '../icons/arrow.png'
import { NavLink } from "react-router-dom";
//import { Outlet } from "react-router-dom";

import { WishlistModal } from '../WishlistModal/WishlistModal'
//import { WishlistPage } from 'pages/wishlistPage/WishlistPage';

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <None>
          <li>
            <H1>
              Order On Phone:<Number>+321 453 68 739</Number>{' '}
            </H1>
            <Line></Line>
            <Img src={leterIcon} alt="Leter Icon" />
            <H2>Organicstore@Gmail.Com</H2>
          </li>
        </None>

        <Ul>
          <User src={UserIcon} alt="User Icon" />
          <Li>Account</Li>

          <Line></Line>
          <Heart src={HeartIcon} alt="Heart Icon" />
          <WishlistModal />

          <Line></Line>
          <Truck src={TruckIcon} alt="Truck Icon" />
          <li>
            <NavLink to="/whishlist">Whishlist</NavLink>
          </li>

          <Line></Line>
          <Li>English</Li>
          <Arrow src={ArrowIcon} alt="Arrow Icon" />
        </Ul>

       
        {/* <Outlet /> */}
      </Nav>
    </HeaderContainer>
  );
};