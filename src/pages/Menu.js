import React from 'react';
import MenuList from '../components/MenuList';
import HeroBanner from '../components/HeroBanner';
import menuHeroBanner from '../assets/images/menu-hero-banner.jpg';

const Menu = () => {
  return (
    <React.Fragment>
      <HeroBanner heading="Our Menu" imageFile={menuHeroBanner} />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Milk Selections:</span> Low Fat, Skim, Half & Half, Almond, Oat</p>
        <p className="menu-info"><span className="bold">House Made Syrups $0.50:</span> Mocha, White Mocha, Caramel, Vanilla, Cinnamon, Raspberry, Hazelnut, Lavender</p>
        <h4>Hot Drinks</h4>
        <MenuList type="Hot" />
        <h4>Cold Drinks</h4>
        <MenuList type="Cold" />
        <h4>Hot Tea</h4>
        <MenuList type="Tea" />
        <hr />
        <h3>Food</h3>
        <h4>Bakery</h4>
        <MenuList type="Bakery" />
        <h4>Bites</h4>
        <MenuList type="Bites" />
      </section>
    </React.Fragment>
  );
}

export default Menu;