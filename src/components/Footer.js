import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer>
      <div className="coffee-shop-footer">
        <p></p>
        <div className="other">
          <div className="contact-info">
            <p className="hours"><span className="icon far fa-clock fa-fw"></span> Hours: Mon-Fri 7AM - 5PM Sat 8AM - 4PM</p>
            <p className="address"><span className="icon fas fa-map-marker-alt fa-fw"></span> 121 W 30th St, New York, NY 10001</p>
            <p className="phone"><span className="icon fas fa-phone-alt fa-fw"></span> <a href="tel:5555555555">(212) 335-0333</a></p>
          </div>
          <div className="social-media-links">
            <a href="https://www.facebook.com/kingsstreetcoffeenyc/" target="_blank" aria-label="Facebook" title="Facebook">
              <span className="fab fa-facebook fa-fw"></span>
            </a>
            <a href="https://www.instagram.com/kingsstreetcoffeenyc/?hl=en" target="_blank" aria-label="Instagram" title="Instagram">
              <span className="fab fa-instagram fa-fw"></span>
            </a>
            <a href="https://www.yelp.com/biz/kings-street-coffee-new-york" target="_blank" aria-label="Yelp" title="Yelp">
              <span className="fab fa-yelp fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <p></p>
    </footer>
  );
}

export default Footer;