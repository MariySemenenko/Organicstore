import {
  Nav,
  Ul,
  H1,
  Number,
  Line,
  Img,
  Li,
  H2,
  Heart,
  None,
} from 'components/Styled.styled';
import leterIcon from '../icons/ulitka.svg';
import HeartIcon from '../icons/heart.svg';
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
        <Li>Account</Li>
        <Line></Line>
        
          <Heart src={HeartIcon} alt="Heart Icon" />
        

        <Li>Whishlist</Li>
        <Line></Line>
        <Li>Whishlist</Li>
        <Line></Line>
      </Ul>
    </Nav>
  );
};
