import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  max-width: 1349px;
  margin: 0 auto;
  /* padding: 20px; */
`;

export const Nav = styled.nav`
  background-color: #f4f5f6;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const None = styled.ul`
  list-style: none;
  padding-right: 200px;
`;

export const Number = styled.span`
  color: #7fb401;
  text-transform: capitalize;
  font-size: 14px;
  text-transform: capitalize;
  cursor: pointer;
  padding-right: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const H1 = styled.h1`
  text-transform: capitalize;
  display: inline-block;
  font-size: 14px;
  color: #9c9c9c;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Line = styled.span`
  margin-right: 10px;
  border: 1px dashed #9c9c9c;
`;
export const Img = styled.img`
  color: #9c9c9c;
  width: 20px;
  height: 20px;
  vertical-align: sub;

  &:hover {
    transform: scale(1.03);
  }
`;

export const H2 = styled.h1`
  text-transform: capitalize;
  display: inline-block;
  font-size: 14px;
  color: #9c9c9c;
  font-weight: normal;
  margin-left: 15px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Ul = styled.ul`
  cursor: pointer;
  display: flex;
  list-style: none;
  position: relative;
  float: right;
  margin-right: 30px;
  margin-top: 9px;
  /* margin-left: 300px; */
`;

export const User = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: sub;
  padding-right: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Arrow = styled.img`
  width: 10px;
  height: 10px;
  vertical-align: sub;
  padding-right: 15px;
  margin-top: 5px;
`;

export const Li = styled.li`
  font-family: 'Roboto', sans-serif;
  color: #9c9c9c;
  line-height: 1.42857143;
  font-size: 14px;
  padding-right: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const WhishlistLink = styled(NavLink)`
  color: green; 

  &.active {
    color: orange;
  }
`;

export const Heart = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 10px;
  margin-left: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Truck = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 10px;
  margin-left: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Heartmodal = styled.img`
  width: 18px;
  height: 18px;
  padding-right: 10px;
  fill: white;
  margin-left: 15px;

  &:hover {
    transform: scale(1.03);
  }
`;

///////////////////////////

export const Modalbackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backgraund = styled.div`
  background-color: #7fb401;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 40px;
`;

export const Modalcontent = styled.button`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 700px;
  height: 500px;
  padding-bottom: 300px;
`;

export const Modalclose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #c0bdbd;
`;
export const H1wishlist = styled.h1`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: white;
`;
