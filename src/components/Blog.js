import React from 'react';

// BlogBox Component to render individual blog posts
const BlogBox = ({ image, title, description, date }) => {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <img src={image} alt={title} />
      </div>
      <div className="blog-details">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#">CONTINUE READING</a>
      </div>
      <h1>{date}</h1>
    </div>
  );
};

// Blog Component to display the list of blogs
const Blog = () => {
  const blogs = [
    {
      image: 'images/3.jpg',
      title: 'The Cotton- Jercsey Zip up Hoodie',
      description: 'kickstarter man braid godard ciloring book. raclette waistcoat selfies yrwolf charteuse hexagon irony godard...',
      date: '13/01',
    },
    {
      image: 'images/blog22.jpg',
      title: 'The Cotton- Jercsey Zip up Hoodie',
      description: 'kickstarter man braid godard ciloring book. raclette waistcoat selfies yrwolf charteuse hexagon irony godard...',
      date: '13/01',
    },
    {
      image: 'images/blog23.jpg',
      title: 'The Cotton- Jercsey Zip up Hoodie',
      description: 'kickstarter man braid godard ciloring book. raclette waistcoat selfies yrwolf charteuse hexagon irony godard...',
      date: '13/01',
    },
    {
      image: 'images/blog26.jpg',
      title: 'The Cotton- Jercsey Zip up Hoodie',
      description: 'kickstarter man braid godard ciloring book. raclette waistcoat selfies yrwolf charteuse hexagon irony godard...',
      date: '13/01',
    },
    {
      image: 'images/blog25.jpg',
      title: 'The Cotton- Jercsey Zip up Hoodie',
      description: 'kickstarter man braid godard ciloring book. raclette waistcoat selfies yrwolf charteuse hexagon irony godard...',
      date: '13/01',
    },
  ];

  return (
    <section id="blog">
      {blogs.map((blog, index) => (
        <BlogBox
          key={index}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          date={blog.date}
        />
      ))}
    </section>
  );
};

// Pagination Component to handle pagination
const Pagination = () => {
  return (
    <section id="pagination" className="section-p1">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#"><i className="fas fa-arrow-right"></i></a>
    </section>
  );
};

// Newsletter Component for the newsletter section
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

// PageHeader Component for the page header section
const PageHeader = () => {
  return (
    <section id="page-header" className="blog-header">
      <h2>#readmore</h2>
      <p>Read all case studies about our products!</p>
    </section>
  );
};

// Main App Component that combines all sections
const App = () => {
  return (
    <div>
      <PageHeader />
      <Blog />
      <Pagination />
      <Newsletter />
    </div>
  );
};

export default App;
