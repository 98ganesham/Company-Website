import image from "../../Components/images/web 1.jpg";
import "../../index.css";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img src={image} alt="web develope image" className="image" />
      </div>
      <div className="about__header">
        <div className="about__company">
          <div className="h3">
            <h3 className="about__h3">About Us </h3>
          </div>

          <p className="p">
            Hi, We are VaroonValley Company Web Developers. We design & build
            user Interfaces.
          </p>
        </div>

        <div className="about__website">
          <h3 className="web__h3">Website Development</h3>
          <p className="web__p">
            Our Comprehensive website development services encompass all aspects
            of technical and creative process which are necessary to develop a
            successful web sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
