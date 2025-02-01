// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Shop from './components/Shop';
// import Blog from './components/Blog';
// import About from './components/About';
// import Contact from './components/Contact';
// import Cart from './components/Cart';
// import Sproduct from './components/Sproduct';
// import SignUp from './components/signup';
// import Login from './components/login';
// import Profile from './components/Profile';
// import ProductList from './components/ProductList';
// // import ProductFilter from './components/ProductFilter ';
// import FormComponent from '../src/contextApi/FormComponent ';
// import { UserProvider } from './contextApi/UserContext';

// function App() {
//   return (
//     <UserProvider>
//     <Router> 
//       <div>
//         <Navbar />
        
//         <Routes>
//           <Route path="/" element={<Home />} /> 
//           {/* <Route path="/context" element={<FormComponent />} /> */}
//           {/* <UserProvider>
//       <div>
//         <FormComponent />
//         <DisplayUserData />
//       </div>
//     </UserProvider> */}
//           <Route path="/shop" element={<ProductList />} /> 
//           {/* <Route path="/price" element={<ProductFilter />} /> */}
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} /> 
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/sproduct" element={<Sproduct />} />
//           <Route path="/register" element={<SignUp />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
        
//         <Footer />
//       </div>
//     </Router>
//     </UserProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Sproduct from './components/Sproduct';
import SignUp from './components/signup';
import Login from './components/login';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import { UserProvider } from './contextApi/UserContext';

function App() {
  return (
    <UserProvider>
      <Router> 
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/shop" element={<ProductList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sproduct" element={<Sproduct />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* Add fallback route for unmatched paths */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
