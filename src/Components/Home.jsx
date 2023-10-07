import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
           <nav>
            <div className='flex justify-between p-4 bg-slate-500'>
                <div>
                    Logo
                </div>
                <div className='flex flex-row gap-2 text-white'>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                    <a href="#">Home</a>
                </div>
            </div>
           </nav>

        </>
    );
};

export default Home;