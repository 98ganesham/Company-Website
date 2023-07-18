import "./contact.css";
import "../../index.css";
import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import contact from "../../Components/images/contact.png";
import { MdOutlineLocationOn } from "react-icons/md";
import left from "../../Components/images/arrow-left.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
  phone:string;
}
const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: ""
  });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <header title="Contact Us">
        <div className="contact__header">
          <img src={contact} alt="contact__png" className="contact__png" />
        </div>
      </header>
      <section className="contact">
      <div className="contact__form">
          <p> Get In Touch With Us</p>
            <form onSubmit={handleSubmit}>
              <div className="contact__input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} required
                />
              </div>
              <div className="contact__email">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} required
                />
                </div>
                <div className="contact__phone-no">
                <label htmlFor="phone">Phone:</label>
                <input type="text" 
                id="phone"
                value={formData.phone}/>
                </div>
              
              <div className="form__message">
                
                <label htmlFor="message">Message:</label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange} className="contact__message"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          
        <div className="container contact__container">
          <div className="contact__wrapper">
            <div className="contact__mail">
              <h2>Email</h2>
              <MdEmail className="contact__md" />
              <p>job@varoonvalley.com</p>
            </div>
            <div className="contact__github">
              <h2>GitHubID</h2>
              <a href="https://github.com/VaroonValley">
                <AiFillGithub className="contact__ai" />
              </a>
              <p>VaroonValley Github</p>
            </div>
            <div className="contact__phone">
              <AiOutlinePhone className="phone" />
              <h2>Phone</h2>
              <p>09458311581</p>
            </div>
            <div className="contact__location">
              <a href="https://goo.gl/maps/7JFcQFyWt7dSZL9D8">
              <MdOutlineLocationOn className="md"/>
              </a>
              
              
              <p>No. /Shwe KanDaw street, Mogok,Myanmar</p>
            </div>
          </div>
          
          <div className="Link__left">
            <Link to="/team" className="link">
              <img src={left} alt="left arrow" className="left" /> Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
