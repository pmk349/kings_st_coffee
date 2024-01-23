import React from 'react';

const Visit = () => {
  return (
    <React.Fragment>
      <section className="main-content visit">
        <h3>Hours</h3>
        <p>Mon-Fri 7AM - 5PM</p>
        <p>Sat 8AM - 4PM</p>
        <p>Sun CLOSED</p>
        <h3>Phone</h3>
        <p><a href="tel:2123350333">(212) 335-0333</a></p>
        <h3>Email</h3>
        <p><a href="mailto:kingsstreetcoffee@gmail.com">kingsstreetcoffee@gmail.com</a></p>
        <h3>Location</h3>
        <p>121 W 30th ST, New York, NY 10001</p>
      </section>
    </React.Fragment>
  );
}

export default Visit;