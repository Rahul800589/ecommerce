import React, { useState } from 'react';
import axios from 'axios';
import './ProductFilter.css'; // Import the CSS file

const ProductFilter = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  const handleSearch = async () => {
    if (!minPrice || !maxPrice) {
      setError("Both minimum and maximum prices are required.");
      setProducts([]);
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/admin/categories/price', {
        minPrice: minPrice,
        maxPrice: maxPrice
      });

      if (response.data.products.length === 0) {
        setError("No products found in the given price range.");
      } else {
        setProducts(response.data.products);
        setError(null);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Invalid price range.");
      } else {
        setError("An error occurred while fetching products.");
      }
      setProducts([]);
    }
  };

  return (
    <div className="product-filter">
      <h2>Filter Products by Price</h2>
      <div className="input-container">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />

        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="products-container">
        {products.length === 0 ? (
          <p>No products found</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.images} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
