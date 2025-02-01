// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../components/productList.css";
// import ProductFilter from './ProductFilter ';
// import Search from './Search';

// const Product = ({ image, name, price, quantity }) => {
//   return (
//     <div className="col-md-4 col-sm-6 mb-4">
//       <div className="card">
//         <img src={image} alt={name} className="card-img-top" />
//         <div className="card-body">
//           <h5 className="card-title">{name}</h5>
//           <p className="card-text"><strong>In Stock:</strong> {quantity}</p>
//           <h4>{price}</h4>
//           <a href="#" className="btn btn-primary">Add to Cart</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]); // To store subcategories of the selected category
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubCategory, setSelectedSubCategory] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage] = useState(6);

//   // Fetch products and categories from the API
//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/admin/products?page=${currentPage}&limit=${productsPerPage}&categoryId=${selectedSubCategory?selectedSubCategory._id:''}&pId=${selectedCategory?selectedCategory._id:''}`)
//       .then((response) => {
//         setProducts(response.data.products);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to fetch products.');
//         setLoading(false);
//       });

//     axios
//       .get('http://localhost:4000/admin/categories/parent')
//       .then((response) => {
//         setCategories(response.data.categories);
//       })
//       .catch((err) => {
//         setError('Failed to fetch categories.');
//       });
//   }, [currentPage,selectedCategory,selectedSubCategory]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubCategory(''); // Reset subcategory when category changes

//     // Fetch subcategories for the selected category
//     axios
//       .get(`http://localhost:4000/admin/categories/child/${category._id}`)
//       .then((response) => {
//         setSubCategories(response.data.categories);
//       })
//       .catch((err) => {
//         setError('Failed to fetch subcategories.');
//       });
//   };

//   const handleSubCategoryChange = (subCategory) => {
//     console.log(subCategory)
//     setSelectedSubCategory(subCategory);
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   if (loading) {
//     return <div className="text-center">Loading products...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-danger">{error}</div>;
//   }

//   return (
//     <div className="container">
//       <section id="page-header" className="text-center my-5">
//         <h2>#stayhome</h2>
//         <p>Save more with coupons & up to 70% off!</p>
//       </section>
//       <ProductFilter/>
//       <Search/>

//       {/* Category Dropdown */}
//       <section id="categories" className="mb-4">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="dropdown">
//               <button
//                 className="btn btn-secondary dropdown-toggle"
//                 type="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 {selectedCategory ? `Category: ${selectedCategory.name}` : 'Select Category'}
//               </button>
//               <ul className="dropdown-menu">
//                 {categories.map((category) => (
//                   <li key={category._id}>
//                     <button className="dropdown-item" onClick={() => handleCategoryChange(category)}>
//                       {category.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Subcategory Dropdown (conditionally rendered) */}
//           {selectedCategory && (
//             <div className="col-md-4">
//               <div className="dropdown">
//                 <button
//                   className="btn btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {selectedSubCategory ? `Subcategory: ${selectedSubCategory.name}` : 'Select Subcategory'}
//                 </button>
//                 <ul className="dropdown-menu">
//                   {subCategories.length === 0 ? (
//                     <li><span className="dropdown-item">No subcategories available</span></li>
//                   ) : (
//                     subCategories.map((subCategory) => (
//                       <li key={subCategory._id}>
//                         <button className="dropdown-item" onClick={() => handleSubCategoryChange(subCategory)}>
//                           {subCategory.name}
//                         </button>
//                       </li>
//                     ))
//                   )}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       <section id="product1">
//         <div className="row">
//           {products.map((product) => (
//             <Product
//               key={product._id}
//               image={product.images[0]} // Show the first image for the product
//               name={product.title}
//               price={`$${product.price}`}
//               quantity={product.quantity}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Pagination */}
//       <section id="pagination" className="my-5">
//         <nav>
//           <ul className="pagination justify-content-center">
//             <li className="page-item">
//               <button
//                 className="page-link"
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//             </li>
//             <li className="page-item">
//               <button
//                 className="page-link"
//                 onClick={() => handlePageChange(currentPage + 1)}
//               >
//                 Next
//               </button>
             
//             </li>
//           </ul>
//         </nav>
//       </section>

//       <section id="newsletter" className="my-5 text-center">
//         <div className="newstext">
//           <h4>Sign Up For Newsletters</h4>
//           <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
//         </div>
//         <div className="form">
//           <input type="text" className="form-control" placeholder="Your email address" />
//           <button className="btn btn-primary mt-3">Sign Up</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductList;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "../components/productList.css";
import ProductFilter from '../components/ProductFilter ';
import Search from './Search';
import { useSelector } from 'react-redux';

const Product = ({ image, name, price, quantity, productId, handleAddToCart }) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><strong>In Stock:</strong> {quantity}</p>
          <h4>{price}</h4>
          <button className="btn btn-primary" onClick={() => handleAddToCart(productId)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const navigate = useNavigate();  // Use useNavigate hook
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]); // To store subcategories of the selected category
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState(''); // To store search term
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log(isAuthenticated, user);
  // Fetch products and categories from the API
  useEffect(() => {
    axios
      .get(`http://localhost:4000/admin/products?page=${currentPage}&limit=${productsPerPage}&categoryId=${selectedSubCategory?selectedSubCategory._id:''}&pId=${selectedCategory?selectedCategory._id:''}&searchItem=${searchTerm}`)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products.');
        setLoading(false);
      });

    axios
      .get('http://localhost:4000/admin/categories/parent')
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((err) => {
        setError('Failed to fetch categories.');
      });
  }, [currentPage, selectedCategory, selectedSubCategory,searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(''); // Reset subcategory when category changes

    // Fetch subcategories for the selected category
    axios
      .get(`http://localhost:4000/admin/categories/child/${category._id}`)
      .then((response) => {
        setSubCategories(response.data.categories);
      })
      .catch((err) => {
        setError('Failed to fetch subcategories.');
      });
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (productId) => {
    // Fetch the selected product (you can modify it according to your API response)
    const product = products.find(p => p._id === productId);

    // Save to localStorage or state
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({ ...product, quantity: 1 }); // Add the product with default quantity of 1
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Navigate to cart page
    navigate("/cart");  // Use navigate() instead of history.push()
  };

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container">
      <section id="page-header" className="text-center my-5">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <ProductFilter />
      <Search setSearchTerm={setSearchTerm} />

      {/* Category Dropdown */}
      <section id="categories" className="mb-4">
        <div className="row">
          <div className="col-md-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCategory ? `Category: ${selectedCategory.name}` : 'Select Category'}
              </button>
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category._id}>
                    <button className="dropdown-item" onClick={() => handleCategoryChange(category)}>
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Subcategory Dropdown (conditionally rendered) */}
          {selectedCategory && (
            <div className="col-md-4">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedSubCategory ? `Subcategory: ${selectedSubCategory.name}` : 'Select Subcategory'}
                </button>
                <ul className="dropdown-menu">
                  {subCategories.length === 0 ? (
                    <li><span className="dropdown-item">No subcategories available</span></li>
                  ) : (
                    subCategories.map((subCategory) => (
                      <li key={subCategory._id}>
                        <button className="dropdown-item" onClick={() => handleSubCategoryChange(subCategory)}>
                          {subCategory.name}
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="product1">
        <div className="row">
          {products.map((product) => (
            <Product
              key={product._id}
              image={product.images[0]} // Show the first image for the product
              name={product.title}
              price={`$${product.price}`}
              quantity={product.quantity}
              productId={product._id} // Pass productId to the Product component
              handleAddToCart={handleAddToCart} 
      // Pass the handleAddToCart function
            />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section id="pagination" className="my-5">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>

      <section id="newsletter" className="my-5 text-center">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
          <input type="text" className="form-control" placeholder="Your email address" />
          <button className="btn btn-primary mt-3">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
