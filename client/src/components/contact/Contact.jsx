import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactus">
      <div className="title">
        <h2>Contact Us</h2>
      </div>

      <div className="box">
        <div className="Contact form">
          <h3>Send a Message</h3>
          <form>
            <div className="formbox">
              <div className="row50">
                <div className="inputbox">
                  <span>First Name</span>
                  <input type="text" placeholder="" />
                </div>
                <div className="inputbox">
                  <span>Last Name</span>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <div className="row50">
                <div className="inputbox">
                  <span>Email Address</span>
                  <input type="text" placeholder="" />
                </div>
                <div className="inputbox">
                  <span>Contact Number</span>
                  <input type="text" placeholder="" />
                </div>
              </div>

              <div className="row100">
                <div className="inputbox">
                  <span>Message</span>
                  <textarea placeholder="Write Your Message here...."></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputbox">
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="Contact info">
          <h3>Contact Info</h3>
          <div className="infobox">
            <div>
              <span>
                <ion-icon name="location"></ion-icon>
              </span>
              <p>
                T.G Samanta Road, Kenduadihi <br />
                West Bengal, India
              </p>
            </div>
            <div>
              <span>
                <ion-icon name="mail"></ion-icon>
              </span>
              <a href="mailto:yubarajnandi2001@gmail.com">
                yubarajnandi2001@gmail.com
              </a>
            </div>
            <div>
              <span>
                <ion-icon name="call"></ion-icon>
              </span>
              <a href="tel:+91 629 546 3096">+91 629 546 3096</a>
            </div>
            <ul className="sci">
              <li>
                <a href="#">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="Contact map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2117309159817!2d87.04512597504873!3d23.235381079025128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7af69fe650f4b%3A0xcf23f54b91181cfa!2sBankura%20Sammilani%20College!5e0!3m2!1sen!2sin!4v1682123092645!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
