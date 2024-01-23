import React from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import { Map } from '@googlemaps/react-wrapper'

const Home = () => {
  return (
    <section className="main-content home">
      <section className="content-container welcome">
        <h3>Welcome to King's Street Coffee!</h3>
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
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12090.583265936133!2d-74.00966161284181!3d40.74781840000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af1423dd57%3A0xc79663f8c0966fe0!2sKing&#39;s%20Street%20Coffee!5e0!3m2!1sen!2sus!4v1698502692882!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
      </section>
    </section>
  );
}

export default Home;