import React from 'react';
import Img1 from "../assets/img1.jpg";

const landingpage = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${Img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value (0.5) to control the darkness
    };

    return (
        <div className="flex justify-center items-center h-[100vh]" style={backgroundImageStyle}>
            <div  className="flex flex-col gap-3 justify-center items-center text-white" style={overlayStyle}>
                <h1 className='font-serif text-5xl'>Bongo-Bits</h1>
                <h2 className='font-mono text-3xl italic text-center'>Bit e Bit e Banglar Shad</h2>
            </div>
        </div>
    );
};

export default landingpage;
