import React from 'react';
import { Link } from 'react-router-dom';

import Landingpage from './landingpage';
import About from './About';
import Products from './products';
import Contact from './contact';
import Footer from './Footer';


import logo from "../assets/WhatsApp_Image_2023-10-26_at_12.13.40_AM-removebg-preview.png"

const Home = () => {
    return (
        <>
           <nav>
            <div className='flex justify-between bg-[#050505]' id='nav'>
                <div>
                    <img width={60} src={logo} alt='logo'/>
                </div>
                <div className='flex flex-row gap-4 items-center text-white px-4'>
                    <a href="#about">About Us</a>
                    <a href="#product">Products</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
           </nav>
           <Landingpage/>
           <About/>
           <Products/>
           <Contact/>
           <Footer/>

        </>
    );
};

export default Home;