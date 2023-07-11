import { NavLink } from "react-router-dom";
import { Button } from "../Elements/Button";
import styled from "styled-components";




const About = () => {


  
  return (
    <>
    <Store>
      <div className="container grid grid-two-column">
        <div className="section-about-data">
        <h1 className="about-heading">
            About Us
          </h1>
          <p className="about-top-data">
            Welcome To VaroonValley. Its A Projessional Software & Web Developing Company.
          </p>
          
          <p className="about-p">
          Make Your Business Shine On Our Webdevelopment Company.
          </p>
          
          <Button className="btn next-btn">
          {/* <span>
              <img src={reactlogo} alt="react-logo" className="react-logo" />
            </span> */}
           <NavLink to="/contact">
              <strong>Next</strong>
            </NavLink>
          </Button>
        </div>
        <div className="about-hero-img">
          {/* <picture>
            <img src={webimage} alt="web-development" className="hero-img" />
          </picture> */}
        </div>
      </div>
    </Store>
    </>
  )
};
const Store = styled.section`
padding: 3rem 2rem;

.section-about-data{
  display: flex;
    
  flex-direction: column;
  justify-content: center;
}
.about-top-data{
  font-weigth: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};

}
.about-heading{
   
  text-transform: uppercase;
  white-space : nowrap;
  font-size: 2.5rem;
  font-weight: 500;
  color: darkred;
}

`;


export default About;