import "./About.css";

const About = () => {
  return (
    <div className="outerAbout">
      <div className="about" id="about">
        <div className="ourteam">
          <div className="title">
            <h1>Our Team</h1>
          </div>
        </div>
        <swiper-container
          className="mySwiper"
          pagination="true"
          effect="coverflow"
          grab-cursor="true"
          centered-slides="true"
          slides-per-view="auto"
          coverflow-effect-rotate="50"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="100"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="true"
        >
          <swiper-slide className="ss">
            <div className="image">
              <img src="/bhagya.jpg" />
            </div>
            <div className="details">
              <h3>Bhagyashree Singh</h3>
            </div>
            <ul className="social">
              <li>
                <a href="#" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="" target="blank">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/gopal.jpeg" />
            </div>
            <div className="details">
              <h3>Gopal Daripa</h3>
            </div>
            <ul className="social">
              <li>
                <a href="mailto: gopaldaripa5@gmail.com" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/gopal.daripa?mibextid=ZbWKwL"
                  target="blank"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/gopaldaripa?igshid=OGQ5ZDc2ODk2ZA=="
                  target="blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/manami.jpeg" />
            </div>
            <div className="details">
              <h3>Manami Rajak</h3>
            </div>
            <ul className="social">
              <li>
                <a href="mailto: manamirajak2003@gmail.com" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100066507981218"
                  target="blank"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/monami_rajak?igshid=NGExMmI2YTkyZg=="
                  target="blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/mou.jpeg" />
            </div>
            <div className="details">
              <h3>Moulisa Nandi</h3>
            </div>
            <ul className="social">
              <li>
                <a href="#" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a href="mailto: moulisanandi15@gmail.com" target="blank">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/moulisa15?igshid=OGQ5ZDc2ODk2ZA==" target="blank">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100019028182540&mibextid=ZbWKwL" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/prachi.jpeg" />
            </div>
            <div className="details">
              <h3>Prachurjya Das</h3>
            </div>
            <ul className="social">
              <li>
                <a href="mailto: prachurjyadas708@gmail.com" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/prachurjya.das.54?mibextid=ZbWKwL"
                  target="blank"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_p.r.a.c.h.u.r.j.y.a_?igshid=ZDc4ODBmNjlmNQ=="
                  target="blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/yubraj.jpg" />
            </div>
            <div className="details">
              <h3>Yubaraj Nandi</h3>
            </div>
            <ul className="social">
              <li>
                <a href="mailto: yubarajnandi2001@gmail.com" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/yubraj.nandi?mibextid=ZbWKwL"
                  target="blank"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yubi_nandi?igshid=OGQ5ZDc2ODk2ZA=="
                  target="blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide className="ss">
            <div className="image">
              <img src="/sdm.jpeg" />
            </div>
            <div className="details">
              <h3>Sundaram Dutta Modak</h3>
            </div>
            <ul className="social">
              <li>
                <a href="mailto: sdmbqa420@gmail.com" target="blank">
                  <ion-icon name="mail"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sundaram.duttamodak?mibextid=ZbWKwL"
                  target="blank"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sundaram_dm?igshid=MzNlNGNkZWQ4Mg=="
                  target="blank"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" target="blank">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  );
};

export default About;
