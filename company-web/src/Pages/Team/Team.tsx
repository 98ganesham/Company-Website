import team1 from "../../Components/images/team1.jpg";
import team2 from "../../Components/images/team2.jpg";
import team3 from "../../Components/images/team3.jpg";
import team4 from "../../Components/images/team4.jpg";
import team5 from "../../Components/images/team5.jpg";
import team6 from "../../Components/images/team6.jpg";
import "./team.css";
import left from '../../Components/images/arrow-left.svg';
import right from '../../Components/images/arrow-right.svg';
import githut from "../../Components/images/github.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Team = () => {
  const [isIconShowing, setIsIconShowing] = useState(false);
  return (
    <section className="section-head">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section__title">Meet Our Team</h2>
            <div className="col-sm-6 col-md-4">
              <div className="team__ceo">
                <img className="team__ceo-img" src={team1} alt="team__ceo" />
                <h3>Mohan Lar</h3>
                <div className="team__ceo-info">
                  <p>CO-FOUNDER of varoonvalley</p>
                  <ul className="team__ceo-icon">
                    <li>
                      <a
                        href="https://github.com/mohanlar96"
                        className="github"
                      >
                        <img
                          src={githut}
                          alt="ceo__github"
                          className="ceo__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__coo">
                <img className="team__coo-img" src={team2} alt="team__coo" />
                <h3>Gangada</h3>
                <div className="team__coo-info">
                  <p> Chief Operations Officer of varoonvalley</p>
                  <ul className="team__coo-icon">
                    <li>
                      <a href="https://github.com/VaroonValley" className="coo-github">
                        <img
                          src={githut}
                          alt="coo__github"
                          className="coo__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__member1">
                <img
                  className="team__member1-img"
                  src={team3}
                  alt="team__member1"
                />
                <h3>Soe Phyu Phyu Htun</h3>
                <div className="team__member1-info">
                  <p> Junior Web Developer</p>
                  <ul className="team__member1-icon">
                    <li>
                      <a
                        href="https://github.com/SoePhyu99"
                        className="member1-github"
                      >
                        <img
                          src={githut}
                          alt="member1__github"
                          className="member1__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__member2">
                <img
                  className="team__member2-img"
                  src={team4}
                  alt="team__member2"
                />
                <h3>Thihan Win Htet</h3>
                <div className="team__member2-info">
                  <p> Junior Web Developer</p>
                  <ul className="team__member2-icon">
                    <li>
                      <a
                        href="https://github.com/ThihanWinhtet"
                        className="member2-github"
                      >
                        <img
                          src={githut}
                          alt="member2__github"
                          className="member2__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__member3">
                <img
                  className="team__member3-img"
                  src={team5}
                  alt="team__member3"
                />
                <h3>Aund Phyo Thant</h3>
                <div className="team__member3-info">
                  <p> Junior Web Developer</p>
                  <ul className="team__member3-icon">
                    <li>
                      <a
                        href="https://github.com/AungPhyoThant224"
                        className="github"
                      >
                        <img
                          src={githut}
                          alt="member3__github"
                          className="member3__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team__member4">
                <img
                  className="team__member4-img"
                  src={team6}
                  alt="team__member4"
                />
                <h3>Chaw Be Lar</h3>
                <div className="team__member4-info">
                  <p> Junior Web Developer</p>
                  <ul className="team__member4-icon">
                    <li>
                      <a
                        href="https://github.com/98ganesham"
                        className="github"
                      >
                        <img
                          src={githut}
                          alt="member4__github"
                          className="member4__github"
                          onClick={() => setIsIconShowing((prev) => !prev)}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Link__left">
          <Link to="/about" className="link">
            <img src={left} alt="left arrow" className="left" /> About 
          </Link>
        </div>
        <div className="Link__right">
          <Link to="/contact" className="link">
            <img src={right} alt="right arrow" className="right" /> Contact
          </Link>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
