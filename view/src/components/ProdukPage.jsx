import React from 'react';
import '../styles/produk.css';

const ProdukPage = () => {
  return (
    <section>
      <h2>Our Products</h2>
      <div className="container">
        <div className="Products">
          <div className="product">
            <img width="150" height="150" src="https://img.icons8.com/wired/64/000000/router.png" alt="router" />
            <h3>Wifi 10-Mbps</h3>
            <p>Rp 239.000</p>
            <button class="button-10" role="button">
              <a href="/add" style={{ color: 'white' }}>
                click to order
              </a>
            </button>
          </div>
          <div className="product">
            <img width="150" height="150" src="https://img.icons8.com/wired/64/000000/router.png" alt="router" />
            <h3>Wifi 20-Mbps</h3>
            <p>Rp 319.000</p>
            <button class="button-10" role="button">
              <a href="/add" style={{ color: 'white' }}>
                click to order
              </a>
            </button>
          </div>
          <div className="product">
            <img width="150" height="150" src="https://img.icons8.com/wired/64/000000/router.png" alt="router" />
            <h3>Wifi 30-Mbps</h3>
            <p>Rp 369.000</p>
            <button class="button-10" role="button">
              <a href="/add" style={{ color: 'white' }}>
                click to order
              </a>
            </button>
          </div>
          <div className="product">
            <img width="150" height="150" src="https://img.icons8.com/wired/64/000000/router.png" alt="router" />
            <h3>Wifi 50-Mbps</h3>
            <p>Rp 499.000</p>
            <button class="button-10" role="button">
              <a href="/add" style={{ color: 'white' }}>
                click to order
              </a>
            </button>
          </div>
          <div className="product">
            <img width="150" height="150" src="https://img.icons8.com/wired/64/000000/router.png" alt="router" />

            <h3>Playbox STB</h3>
            <p>Rp 999.000</p>
            <button class="button-10" role="button">
              <a href="/add" style={{ color: 'white' }}>
                click to order
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProdukPage;
