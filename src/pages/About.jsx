import React from 'react';
const About = () => {
  return (
    <div className='bg-gray-100'>
         <div className='relative h-screen bg-cover bg-center h-96 transform transition duration-300 hover:scale-105' style={{backgroundImage : "url('/assets/programmer.jpg')"}}>
         <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4 hover:text-green-400 transform transition duration-300 hover:scale-105'>About Me</h4>
        </div>
       </div>
     <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center'>
                <img src="/assets/mycontact.png" 
                alt="About me" 
                className='rounded-lg shadow-md w-full h-auto hover: transform transition duration-300 hover:scale-105'/>
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-2xl font-bold mb-4 hover:text-green-600 transform transition duration-300 hover:scale-105'>Who I Am</h3>
                <p className='text-gray-700 mb-10 hover:text-gray-600 transform transition duration-300 hover:scale-105'>I am Abadanaf Chala, a passionate and dedicated software engineering student with a strong focus on web development. My journey in technology began with a fascination for creating interactive and user-friendly applications that enhance the online experience. Currently pursuing a degree in Software Engineering, I have gained a solid foundation in programming languages, software design principles, and modern development frameworks.</p>

                <h3 className='text-2xl font-bold mb-4 hover:text-green-600 transform transition duration-300 hover:scale-105'>My Mission</h3>
                <p className='text-gray-700 mb-4 hover:text-gray-600 transform transition duration-300 hover:scale-105'>As a passionate software engineering student, my mission is to leverage technology to create innovative and user-friendly web applications that enhance the digital experience. I strive to continuously learn and adapt in the ever-evolving field of web development, while collaborating with diverse teams to solve real-world problems. My goal is to contribute to projects that improve accessibility, performance, and user satisfaction, ultimately making technology more inclusive and impactful for all.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default About;
