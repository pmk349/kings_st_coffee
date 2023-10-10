import React from 'react';
import HeroBanner from '../components/HeroBanner';
import visitHeroBanner from '../assets/images/visit-hero-banner.jpg';

const Visit = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Visit Us" imageFile={visitHeroBanner} />
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>Mon-Fri 7AM - 5PM</p>
        <p>Sat 8AM - 4PM</p>
        <p>Sun CLOSED</p>
        <h3>Phone</h3>
        <p><a href="tel:5555555555">(212) 335-0333</a></p>
        <h3>Email</h3>
        <p><a href="mailto:coffee.grounds@realemail.com">coffee.grounds@realemail.com</a></p>
        <h3>Location</h3>
        <p>121 W 30th ST, New York, NY 10001</p>
      </section>
    </React.Fragment>
  );
}

export default Visit;