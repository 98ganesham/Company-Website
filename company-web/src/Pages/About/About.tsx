import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__header-left">
        <h2 className="about__h2">About Us </h2>
        <p className="p">
          Welcome to VaroonValley Company. Its A Professional Software & Web
          Developing Company Founded in May 2023.
        </p>
        <h4 className="about__h4">Website Development</h4>

        <div >
          <Link to="/team" className="btn__lg">
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
