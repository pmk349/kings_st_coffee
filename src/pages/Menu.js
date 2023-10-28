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
        <p className="menu-info"><span className="bold">Alt Milk $1.00:</span> Almond, Coconut, Oat, Soy, Breve</p>
        <p className="menu-info"><span className="bold">Flavor $0.75:</span> Caramel, Hazelnut, Lavender, Rose, Vanilla</p>
        <p className="menu-info"><span className="bold">Extra Shot $2.00</span></p>
        <h4>Hot Drinks</h4>
        <MenuList type="Hot" />
        <h4>Cold Drinks</h4>
        <MenuList type="Cold" />
        <hr />
        <h3>Food</h3>
        <h4>Bakery</h4>
        <MenuList type="Bakery" />
        <h4>Bites</h4>
        <MenuList type="Bites" />
        <h3>Fridge</h3>

      </section>
    </React.Fragment>
  );
}

export default Menu;