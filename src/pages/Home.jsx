import React from 'react';

const Home = () => {
  return (
    <div className='relative h-screen bg-cover bg-center' style={{backgroundImage : "url('/assets/bg2')"}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Visit Oromia With Us</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Discover amazing places at exclusive deals</p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105'
        >Get Started</button>
      </div>
    </div>
  );
}

export default Home;
