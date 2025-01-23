import React from "react";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <div className="home-bg">
        <div className="home-info">
          <p className="fresh-fl">Fresh Flower & Gift Shop</p>
          <p className="beat-fl">
            Making beautiful flowers <br /> a part of your life.
          </p>
          <button className="site-btn">SHOP NOW</button>
        </div>
        <img
          src="	https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="hero-cards">
          <div className="hero-card">
            <img
              src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png"
              alt=""
            />
            <div>
              <h3 style={{ marginBottom: "10px" }}>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>

          <div className="hero-card">
            <img
              src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png.webp"
              alt=""
            />
            <div>
              <h3 style={{ marginBottom: "10px" }}>Made by artist</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png.webp"
              alt=""
            />
            <div>
              <h3 style={{ marginBottom: "10px" }}>Own courier</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
          <div className="hero-card">
            <img
              src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png.webp"
              alt=""
            />
            <div>
              <h3 style={{ marginBottom: "10px" }}>100% Freshness</h3>
              <p>Most people are unaware of the less common flower</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-img-kid">
       <div className="bg-img-kid-info">
       <p>CUSTOM FLOWER</p>
        <p>Let our flowers make your party more perfect.</p>
        <div style={{ display: "flex" }}>
          <button className="site-btn">order now</button>
          <button className="site-btn-2">contact us</button>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Home;
