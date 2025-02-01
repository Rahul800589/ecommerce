import React from 'react';

// PageHeader Component
const PageHeader = () => {
  return (
    <section id="page-header" className="about-header">
      <h2>#KnowUs</h2>
      <p>Lorem ipsum dolor sit amet consectetur</p>
    </section>
  );
};

// AboutHead Component
const AboutHead = () => {
  return (
    <section id="about-head" className="section-p1">
      <img src="images/3.jpg" alt="About Us" />
      <div>
        <h2>Who We Are?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          temporibus error, quis soluta quaerat pariatur, laborum commodi
          numquam nisi optio sequi asperiores eum ullam provident ipsum velit
          officia tenetur facere! Magnam recusandae, hic ad atque sequi
          molestiae voluptatibus excepturi blanditiis accusantium libero,
          perferendis non magni eius corrupti, placeat similique soluta
          dignissimos repudiandae quaerat quidem. Quia nostrum eaque et quis
          doloribus.
        </p>
        <abbr title="Create stunning images with as much or as little control as you like thanks to a choice of basic and creative modes.">
          Create stunning images with as much or as little control as you like thanks to a choice of basic and creative modes.
        </abbr>
        <br /><br />
        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
          Create stunning images with as much or as little control as you like thanks to a choice of basic and creative modes.
        </marquee>
      </div>
    </section>
  );
};

// AboutApp Component (with video)
const AboutApp = () => {
  return (
    <section id="about-app" className="section-p1">
      <h1>Download Our <a href="#">App</a></h1>
      <div className="video">
        <video autoplay muted loop>
          <source
            src="images/Prmovies-Pushpa_2_The_Rule_2024_.mkv.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

// Feature Component
const Feature = () => {
  const features = [
    { image: 'images/feature.jpeg', text: 'Free Shipping' },
    { image: 'images/feature2.jpeg', text: 'Online Order' },
    { image: 'images/feature3.jpeg', text: 'Save Money' },
    { image: 'images/feature4.jpeg', text: 'Promotions' },
    { image: 'images/feature.jpeg', text: 'Happy Sell' },
    { image: 'images/feature6.jpeg', text: 'E24/7 Support' },
  ];

  return (
    <section id="feature" className="section-p1">
      {features.map((feature, index) => (
        <div key={index} className="fe-box">
          <img src={feature.image} alt={feature.text} />
          <h6>{feature.text}</h6>
        </div>
      ))}
    </section>
  );
};

// Newsletter Component
const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates about our latest shop and <span>special offers.</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
};

// Main App Component that brings everything together
const App = () => {
  return (
    <div>
      <PageHeader />
      <AboutHead />
      <AboutApp />
      <Feature />
      <Newsletter />
    </div>
  );
};

export default App;
