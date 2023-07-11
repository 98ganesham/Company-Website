import { NavLink } from "react-router-dom";
import image  from '../images/logo.png'
import NavBar from "./NavBar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={image} alt="logo" className="logo"/>
      </NavLink>
      <NavBar />
      </MainHeader>
      
  );
};


const MainHeader =styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color: ${({theme})=> theme.colors.bg};
display: flex;

justify-content: space-between;
align-items: end;

.logo{
 height: auto;
 flex-shrink :none;
 transition:  ;
 max-width: 10%; 

}



`
;

export default Header;