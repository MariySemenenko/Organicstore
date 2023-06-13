import { Nav, Div, H1, Number, Line, Img } from "components/Styled.styled"
import leterIcon from '../icons/leter.png';
export const Header = () => {

return (
    <Nav>
        <H1>Order On Phone:<Number>+321 453 68 739</Number> </H1>
        <Line></Line>
        
      <Img src={leterIcon} alt="Heart Icon" />
   
        <span>♥</span>
        <Div>Whishlist</Div>
    </Nav>
)

}