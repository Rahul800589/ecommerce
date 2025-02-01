import React from 'react';
import { useCart } from '../contextApi/CartContext'; // Import the useCart hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Product = ({ image, name, price, quantity, id }) => {
  const { addToCart } = useCart(); // Get the addToCart function from context
  const navigate = useNavigate(); // Use navigate hook for navigation

  const handleAddToCart = () => {
    const product = { image, name, price, quantity, id }; // Create the product object
    addToCart(product); // Add the product to the cart
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><strong>In Stock:</strong> {quantity}</p>
          <h4>{price}</h4>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
