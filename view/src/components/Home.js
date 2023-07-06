import React from 'react';
import '../styles/main.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../dist/styles.css';

import { AwesomeButton } from 'react-awesome-button';

const Home = () => {
  return (
    <section>
      <div id="mainContentHome" className="mainContentsHome">
        <div className="content-inner">
          <div className="content-item" id="taspenHero">
            <div className="containerBox">
              <h2>
                Website Pendataan Stok Barang HT Handy Talky <br />
                Polrestabes Semarang Jawa Tengah
              </h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1440 280">
              <path
                fill="#fcd765"
                fill-opacity="1"
                d="M0,128L24,144C48,160,96,192,144,213.3C192,235,240,245,288,218.7C336,192,384,128,432,112C480,96,528,128,576,117.3C624,107,672,53,720,58.7C768,64,816,128,864,160C912,192,960,192,1008,176C1056,160,1104,128,1152,144C1200,160,1248,224,1296,224C1344,224,1392,160,1416,128L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
              ></path>
            </svg>
            <div className="subContainer">
              <AwesomeButton href="/add" type="primary">
                Input Data Pengguna
              </AwesomeButton>
              <AwesomeButton href="/list" type="primary">
                List Data Pengguna
              </AwesomeButton>
            </div>
          </div>
        </div>
        <a class="whats-app" href="https://https://wa.me/+6281228500351" target="_blank">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <footer>
        <h1>CopyRight &copy; by Faskal</h1>
      </footer>
    </section>
  );
};

export default Home;
