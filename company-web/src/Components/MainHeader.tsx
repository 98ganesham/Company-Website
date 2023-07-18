import "..//Pages/Home/home.css";
import Main from "../Components/images/Main.png";
import language from "./images/technology.png";
import right from "../Components/images/arrow-right.svg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <div className="main__head">
              <h4 className="main__h4">
                Welcome to VaroonValley Company. Its A Professional Software &
                Web Developing Company Founded in May 2023.
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
            
              <img src={Main} alt="Main Header Image" className="image" />
            
          </div>
          <p className="p">
            Our full-stack web developers are at your disposal and ready to
            create data-driven and responsive web applications.We develop your
            project by implementing the latest technologies to deliver a modern
            and unique solution whatever your requirements.
          </p>

          <img className="language__image" src={language} alt="language" />
          <div className="Link__detail">
            <Link to="/about" className="link">
              <img src={right} alt="right arrow" className="right" /> About 
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
