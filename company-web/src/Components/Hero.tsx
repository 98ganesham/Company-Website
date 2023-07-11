import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Elements/Button";
import reactlogo from "../images/reactlogo.svg";
import webimage from "../images/web-development.svg";

const Hero= () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
        <h1 className="hero-heading">
            WellCome TO VaroonValley
          </h1>
          <p className="hero-top-data">
            House Of Web Developers And Technology.
          </p>
          
          <p className="hero-p">
          Make Your Business Shine On Our Webdevelopment Company.
          </p>
          
          <Button className="btn enroll-btn">
          <span>
              <img src={reactlogo} alt="react-logo" className="react-logo" />
            </span>
           <NavLink to="/team">
              <strong>Enroll Now</strong>
            </NavLink>
          </Button>
        </div>
        <div className="section-hero-img">
          <picture>
            <img src={webimage} alt="web-development" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 5rem 5rem;

.section-hero-data{
    display: flex;
    
    flex-direction: column;
    justify-content: center;
}
.btn{
    max-width: auto;
    
}
.hero-top-data{
    font-weigth: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};

}
.hero-heading{
   
    
    white-space : nowrap;
    font-size: 2.5rem;
    font-weight: 500;
    color: darkred;
}
.hero-p{
   
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
    white-space: wrap;
    align-items: center;
    font-size: 1.5rem;
}
.section-hero-img{
    display: flex;
    flex-shrink:0;
    justify-content: center;
    align-items: center;
}
picture{
    text-aling: center;
    
}
.hero-img{
    max-height: 100%;
    width: 100%;
    transition: width .5s ease;
    
}
.hero-img:hover{
    width: 80%;
}
`;

export default Hero;
