import React from 'react';
import './Home.css';
import img1 from '../../assets/images/Logo/img1.png'
import img2 from '../../assets/images/Logo/img2.png'
import img3 from '../../assets/images/Logo/img3.png'
import img4 from '../../assets/images/Logo/img4.png'
import img5 from '../../assets/images/Logo/img5.png'
import img6 from '../../assets/images/Logo/img6.png'


const Home = () => {
  return (
    <div className="hero-container">
      {/* Image blocks */}
      <img src={img1} className="img-block img1" alt="portrait 1" />
      <img src={img2} className="img-block cam1" alt="camera 1" />
      <img src={img3} className="img-block img2" alt="portrait 2" />
      <img src={img4} className="img-block img3" alt="portrait 3" />
      <img src={img5} className="img-block img4" alt="portrait 4" />
      <img src={img6} className="img-block cam2" alt="camera 2" />
     

      {/* Centered Text */}
      <div className="hero-text">
        <h1>We're a <br />Professional <br />Photography Studio<span>©</span></h1>
        <p>
          Based in New York, we specialize in landscape, advertorial and conceptual photography.
          Here you will be able to find our latest and favorite shots.
        </p>
        <div className="hero-buttons">
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
          </div>
          <button className="contact-btn">Get in touch →</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
