import { Link } from "react-router-dom";
import "..//Pages/Home/home.css";
import "../index.css";
import Main from "../Components/images/Main.png";
import language from "./images/technology.png";

const MainHeader = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <div className="main__head">
              <h4 className="main__h4">
               Welcome to VaroonValley Company. Its A Professional Software & Web
          Developing Company Founded in May 2023.
              </h4>
            </div>
            <p className="main__header-left p">
              We develop custom software that helps your business. Our expert
              develompent teams build solutions that make business processes
              more effeciten, improve customer exprience and generate more
              profit for our cilents.
            </p>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle">
              <div className="main__header-image">
                <img src={Main} alt="Main Header Image" className="image" />
              </div>
            </div>
          </div>
          <p className="p">
            Our full-stack web developers are at your disposal and ready to
            create data-driven and responsive web applications.We develop your
            project by implementing the latest technologies to deliver a modern
            and unique solution whatever your requirements.
          </p>

          <img className="language__image" src={language} alt="language" />

          <Link to="/about" className="btn">
            About Us
          </Link>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
