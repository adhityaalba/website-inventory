import React from 'react';
import '../styles/profile.css';

const ProfilePage = () => {
  return (
    <section>
      <h2>How can we help? </h2>
      <div className="container">
        <div className="item">
          <p>WhatsApp</p>
          <img width="120" height="120" src="https://img.icons8.com/ios/150/whatsapp--v2.png" alt="whatsapp--v2" />
          <br />

          <button class="button-10" role="button">
            <a href="https://api.whatsapp.com/send/?phone=%2B6282264480299&text&type=phone_number&app_absent=0">WhatsApp</a>
          </button>
        </div>
        <div className="item">
          <p>Call Center</p>
          <img width="120" height="120" src="https://img.icons8.com/ios/50/phone-disconnected.png" alt="phone-disconnected" />
          <br />

          <button class="button-10" role="button">
            <a href="tel:1500121">Call Us</a>
          </button>
        </div>
        <div className="item">
          <p>Location</p>
          <img width="120" height="120" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
          <br />

          <button class="button-10" role="button">
            <a href="https://www.google.com/maps/dir//MNC+Tower+RT.15%2FRW.7,+Kebon+Sirih+Menteng+Central+Jakarta+City,+Jakarta+10340/@-6.184087,106.8315492,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e69f43035fa1a53:0xd01b3d7bcd8e337e">Location</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
