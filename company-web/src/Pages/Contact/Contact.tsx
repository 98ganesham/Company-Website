import "./contact.css";
import "../../index.css";

const Contact = () => {
  return (<>
    
    <div className="contact-container">
      <form action="/contact" method="post" className="contact__form">
        <div className="contact__detail">
          <h3> Contact Us</h3>
          <div className="contact__name">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
              maxLength={25}
            />
          </div>
          <div className="contact__mail">
            <input type="email" id="email" placeholder="Email id" required />
          </div>
          <div className="contact__phone-no">
            <input type="text" id="phone" placeholder="Phone no." required />
          </div>

          <textarea
            name="textarea"
            id="message"
            rows={1.4}
            placeholder="how can we help you?"
            maxLength={200}
          />
        </div>
        <button type="submit">Send</button>
      </form>
      </div>
      <div className="contact">
        <div className="contact__address">
           <h2 className="address">Address</h2>
           <p></p>
        </div>
        <div className="contact__phone">
          <h2 className ="phone">Phone</h2>
        </div>
        <div className="contact__mail">
          <h2 className="mail">Email</h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
