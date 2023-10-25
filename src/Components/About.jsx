import React from 'react';
import img3 from "../assets/img3.jpg"
import logo from "../assets/WhatsApp_Image_2023-10-26_at_12.13.40_AM-removebg-preview.png"
import "../style/about.css"

const About = () => {
    return (
      <>
        <div className='flex flex-col justify-center items-center bg-gradient-to-r from-[#422124] via-[#ecceb0] to-[#bd8e5f] rounded-full my-5 mx-5' id='about'>
          <div className='italic font-serif text-5xl text-center pt-5 text-black'>
            Welcome!
          </div>
          <br />
  
          <div className='flex flex-col italic font-mono text-2xl text-center justify-center items-center gap-5 text-black w-[700px]'>
            <div>
              Where every bit of flavor meets Bangladeshi tradition,
              creating a symphony of taste that dances on your palate
            </div>
            <div className=' rounded-md'>
              <img className="image-float-animation" width={300} src={logo} alt='logo' />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;