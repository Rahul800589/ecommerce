import React from 'react';
import { Link } from 'react-router-dom'; 

const App = () => {
  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Supper value deals</h2>
        <h1>On all Products</h1>
        <p>Save more with coupons & up to 70% off%</p>
        <button><Link to="/shop">Shop Now</Link></button>
      </section>  

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="images/feature.jpeg" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature2.jpeg" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature3.jpeg" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature4.jpeg" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature.jpeg" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="images/feature6.jpeg" alt="" />
          <h6>E24/7 Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Feature Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {['home25', 'home37', 'home27', 'home28', 'home21', 'home22', 'home23', 'home24'].map((product, index) => (
            <div className="pro" key={index}>
              <img style={{height:"400px"}} src={`images/${product}.jpg`} alt="" />
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>Up to <span>70% off</span> - All t-Shirts & Accessories</h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {['home29', 'home26', 'home40', 'home39', 'home33', 'home34', 'home38', 'home36'].map((product, index) => (
            <div className="pro" key={index}>
              <a href="sproduct.html">
                <img style={{height:"400px"}} src={`images/${product}.jpg`} alt="" />
              </a>
              <div className="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>$78</h4>
              </div>
              <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>spring/Summer</h4>
          <h2>Updating season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div className="banner-box">
          <h2>SEASONAL SALE</h2>
          <h3>Winter Collection -50% OFF</h3>
        </div>
        <div className="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2024</h3>
        </div>
        <div className="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>NEW Trendy Prints</h3>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default App;
