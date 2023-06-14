import { Nav, Ul, H1, Number, Line, Img, Li } from 'components/Styled.styled';
import leterIcon from '../icons/ulitka.svg'
export const Header = () => {
  return (
    <Nav>
      
      <H1>
        Order On Phone:<Number>+321 453 68 739</Number>{' '}
      </H1>

      <Line></Line>

      <Img src={leterIcon} alt="Heart Icon" />
      <Ul>
        <span>♥</span>
        <Li>Account</Li>
        <Line></Line>
        <Li>Whishlist</Li>
        <Line></Line>
        <Li>Whishlist</Li>
        <Line></Line>
      </Ul>
    </Nav>
  );
};
