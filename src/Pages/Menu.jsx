import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Component/Cover';
import img from '../assets/menu/banner3.jpg';
import imgDsrt from '../assets/menu/dessert-bg.jpeg';
import imgPizza from '../assets/menu/pizza-bg.jpg';
import imgSld from '../assets/menu/salad-bg.jpg';
import imgSup from '../assets/menu/soup-bg.jpg';
import UseMenu from '../Hoocks/UseMenu';
import SectionTitle from '../Component/SectionTitle';
import MenuCategory from '../Hoocks/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Menu</title>
            </Helmet>
            <Cover img={img} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss " heading="Todays Offer"></SectionTitle>
            {/* offered menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu */}
            <MenuCategory items={dessert} title="Dessert" img={imgDsrt}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} title="Pizza" img={imgPizza}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title="Salad" img={imgSld}></MenuCategory>
            {/* soup menu */}
            <MenuCategory items={soup} title="Soup" img={imgSup}></MenuCategory>
        </div>
    );
};

export default Menu;