import React from 'react';

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img width="50px" className="logo" src="images/ecommerce.jpeg" alt="Logo" />
        <h4>Contact</h4>
        <p><strong>Address :</strong> D-82 nirman nager jaipur</p>
        <p><strong>Phone :</strong> +00 1111 234 / (+91) 21 1234 1234</p>
        <p><strong>Hours :</strong> 100:00-18:00, Mon-sat</p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src="images/footer0.jpeg" alt="App Store" />
          <img src="images/footer1.jpeg" alt="Google Play" />
        </div>
        <p>Secured Payment Gateways</p>
        <img width="140px" src="images/footer3.jpeg" alt="Payment Methods" />
      </div>
      <div className="copyright">
        <p>&copy; 2024, Tech etc - HTML CSS Ecommerce Template</p>
      </div>
    </footer>
  );
};

export default Footer;
