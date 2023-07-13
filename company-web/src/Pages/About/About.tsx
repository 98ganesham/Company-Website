import { Link } from "react-router-dom";
import "./about.css";
import image from '../../Components/images/web 1.jpg';

const About = () => {
  return (
    <div className="about">
      <img src={image} alt="web develope image"  className="about__image"/>
      <div className="about__header-left">
        <h3 className="about__h3">About Us </h3>
        <p className="p">
          Hi, We are VaroonValley Company Web Developers. We design & build user
          Interfaces.
        </p>

        <h3 className="about__h3">Website Development</h3>
        <p className="p">
          Our Comprehensive website development services encompass all aspects
          of technical and creative process which are necessary to develop a
          successful web sites.
        </p>

        
      </div>
      <div>
          <Link to="/team" className="btn lg">
            Team
          </Link>
        </div>
    </div>
  );
};

export default About;
