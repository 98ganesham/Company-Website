import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const Nav = styled.nav`
  .navbar-list{
     display: flex;
    gap: 3.4rem;

    
   li {
      list-style: none;
      overflow: none;
      .navbar-link {
       &:link,
       &:visited{
      display: flex;
      white-space: nowrap;
      text-transform: uppercase;
      text-decoration: none;
        font-size: 1rem;
        font-weight: 300;
       color: ${({ theme }) => theme.colors.text};
       }
       
       &:hover,
       &:active {
                border: none;
                border-radius: 2px;
                background-color: darkred;
                color: #fff;
                transition: color .2s;
       }
        
        }
      }
    }
    li:hover{
      transition: border-bottom color 0.3s linear;
    }
  

  
    
  }
  `;
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/team">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default NavBar;