import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <section className="main-content home">
      <section className="content-container welcome">
        <p>Welcome to King's Street Coffee!</p>
        <p>We sell the third wave coffee (Sweetleaf, New York & Heart Coffee, Portland) and selective tea(Mem Tea, Boston), 
          in addition to baked goods from Balthazar and King's Street Coffee. We can guarantee that any drink you get will 
          be delicious and of high quality. Our atmosphere is very cozy, so it is a great place to stop by with friends</p>
      </section>
      <section className="content-container image-gallery">
        <ImageGallery />
      </section>
      <section className="content-container info">
        <div className="info-container menu-info">
          <h2>Coffee, Espresso, Tea, and more...</h2>
          <Link to="/menu" className="button">View Our Menu</Link>
        </div>
        <div className="info-container wifi-info">
          <h2>Free Wifi available to all customers!</h2>
          <p>Password is <span className="wifi-password">weheartcoffee</span></p>
        </div>
      </section>
    </section>
  );
}

export default Home;