

import {
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
} from 'components/Styled.styled';


import leterIcon from '../icons/ulitka.svg';
import UserIcon from '../icons/user.png';
import {WishlistModal} from '../WishlistModal/WishlistModal'
import HeartIcon from '../icons/heart5.png'

export const Header = () => {
  return (
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
        <Li>Whishlist</Li>
        <Line></Line>
      </Ul>
    </Nav>
  );
};
