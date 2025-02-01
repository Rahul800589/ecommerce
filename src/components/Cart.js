import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutMessage, setCheckoutMessage] = useState(""); // State for checkout success message

  // Load saved cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Ensure that quantity is always initialized to a valid number
    const updatedCartItems = savedCartItems.map(item => ({
      ...item,
      quantity: item.quantity || 1 // Default to 1 if quantity is not set
    }));
    
    setCartItems(updatedCartItems);
  }, []);

  // Handle quantity change for a product
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent setting quantity to 0 or negative values

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity }; // Update the quantity of the product
      }
      return item;
    });
    
    setCartItems(updatedCartItems); // Update state
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to localStorage
  };

  // Remove a specific item by its id
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id); // Remove the item with the matching id
    setCartItems(updatedCartItems); // Update state
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to localStorage

    // If the cart becomes empty, show a message
    if (updatedCartItems.length === 0) {
      setCheckoutMessage("Your cart is empty.");
    }
  };

  // Calculate the subtotal of the cart
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout process
  const handleCheckout = () => {
    // Display the success message when checkout button is clicked
    if (cartItems.length > 0) {
      setCheckoutMessage("Proceeding to checkout..."); // Set success message
    } else {
      setCheckoutMessage("Your cart is empty. Please add items before proceeding."); // If cart is empty
    }
  };

  return (
    <>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>Your cart is empty.</td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <i 
                      className="far fa-times-circle" 
                      onClick={() => handleRemoveItem(item.id)} // Clicking the icon removes only the specific product
                    ></i>
                  </td>
                  <td>
                    <img src={item.images} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)} // Prevent non-numeric input
                      min="1" // Ensure quantity can't go below 1
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>${getSubtotal()}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${getSubtotal()}</td>
            </tr>
          </table>
          <button className="normal" onClick={handleCheckout}>Process to checkout</button>
          {checkoutMessage && <p>{checkoutMessage}</p>} {/* Display success or empty cart message */}
        </div>
      </section>
    </>
  );
};

export default Cart;
