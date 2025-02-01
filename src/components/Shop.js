import React from 'react';

const Product = ({ image, brand, name, price }) => {
  return (
   
    <div className="pro" onClick={() => window.localStorage.href = 'sproduct.html'}>
      <img src={image} alt={name} />
      <div className="des">
        <span>{brand}</span>
        <h5>{name}</h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>{price}</h4>
      </div>
      <a href="#"><i className="fas fa-shopping-cart cart"></i></a>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      image: 'images/shirt6.jpeg',
      brand: 'adidas',
      name: 'Cartoon Astronaut T-Shirts',
      price: '$78',
    },
    {
      image: 'images/shirt1.jpeg',
      brand: 'adidas',
      name: 'Cartoon Astronaut T-Shirts',
      price: '$78',
    },
    {
      image: 'images/shirt2.jpeg',
      brand: 'adidas',
      name: 'Cartoon Astronaut T-Shirts',
      price: '$78',
    },
    {
      image: 'images/shirt3.jpeg',
      brand: 'adidas',
      name: 'Cartoon Astronaut T-Shirts',
      price: '$78',
    },
    // Add more products as needed...
  ];

  return (
    <div className="pro-container">
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          brand={product.brand}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};


const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
};

const PageHeader = () => {
  return (
    <section id="page-header">
      <h2>#stayhome</h2>
      <p>Save more with coupons & up to 70% off!</p>
    </section>
  );
};

const Pagination = () => {
  return (
    <section id="pagination" className="section-p1">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#"><i className="fas fa-arrow-right"></i></a>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <PageHeader />
      <section id="product1" className="section-p1">
        <ProductList />
      </section>
      <Pagination />
      <Newsletter />
    </div>
  );
};

export default App;
