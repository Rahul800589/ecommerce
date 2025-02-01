import React, { useState } from "react";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("Select Size");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to the cart.`);
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
          style={{width: "85%",height: "400px",borderRadius: "50%" , marginBottom: "20px"}}
            src="images/home29.jpg"
            width="100%"
            id="MainImg"
            alt="Main Product"
          />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src="images/home27.jpg"
                width="100%"
                height={200}
                className="small-img"
                alt="Small Image 1"
              />
            </div>
            <div className="small-img-col">
              <img
                src="images/home28.jpg"
                width="100%"
                height={200}
                className="small-img"
                alt="Small Image 2"
              />
            </div>
            <div className="small-img-col">
              <img
                src="images/home29.jpg"
                width="100%"
                height={200}
                className="small-img"
                alt="Small Image 3"
              />
            </div>
            <div className="small-img-col">
              <img
                src="images/home31.jpg"
                width="100%"
                height={200}
                className="small-img"
                alt="Small Image 4"
              />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home / T-shirt</h6>
          <h4>Men's Fashion T-Shirt</h4>
          <h2>$139.00</h2>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
          <button className="normal" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            sequi quaerat quisquam rem aut quia blanditiis a molestias! Quo,
            laborum? Sit, delectus saepe. Repellendus doloremque odio corporis
            illo! Animi, voluptatibus dolor sit amet consectetur adipisicing elit. Similique,
            sequi quaerat quisquam rem aut quia blanditiis a molestias! Quo,
            laborum? Sit, delectus saepe. Repellendus doloremque odio corporis
            illo! Animi, voluptatibus.
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          {/* Repeat this structure for each product */}
          <div className="pro">
            <img src="images/home22.jpg" height={400} alt="Product 1" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="images/home23.jpg" height={400} alt="Product 2" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="images/home24.jpg" height={400} alt="Product 3" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>

          <div className="pro">
            <img src="images/home21.jpg" height={400} alt="Product 4" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-Shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fas fa-shopping-cart cart"></i>
            </a>
          </div>
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

export default ProductPage;
