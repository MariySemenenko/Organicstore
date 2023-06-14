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
} from 'components/Styled.styled';
import leterIcon from '../icons/ulitka.svg';
import heartIcon from '../icons/icons8-heart.gif';
export const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <H1>
            Order On Phone:<Number>+321 453 68 739</Number>{' '}
          </H1>
          <Line></Line>
          <Img src={leterIcon} alt="Leter Icon" />
          <H2>Organicstore@Gmail.Com</H2>
        </li>

        
      </ul>

      <Ul>
        <Li>Account</Li>
        <Line></Line>
        <Heart src={heartIcon} alt="Heart Icon" />
        <Li>Whishlist</Li>
        <Line></Line>
        <Li>Whishlist</Li>
        <Line></Line>
      </Ul>
    </Nav>
  );
};
