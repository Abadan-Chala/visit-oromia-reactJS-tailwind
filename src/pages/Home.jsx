import React from 'react';
import Destinations from '../component/Destinations';
import Services from '../component/Services';
import Clients from '../component/Clients';
import Contactme from '../component/Contactme';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/welcome'); 
    };
  return (
    <>
    <div className='relative h-screen bg-cover bg-center hover: transform transition duration-300 hover:scale-105' style={{backgroundImage : "url('/assets/bg2')"}}>
    <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 hover:text-green-400 transform transition duration-300 hover:scale-105'>VISIT OROMIA</h1>
      <p className='text-lg md:text-2xl text-white mb-8 hover:text-green-400 transform transition duration-300 hover:scale-105'>LAND OF DIVERSE BEAUTY</p>
      <button 
        className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-green-700 transform transition duration-300 hover:scale-105'
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
    </div>
    <Destinations/>
    <Services/>
    <Clients/>
    <Contactme/>
    </>
  );
}

export default Home;
