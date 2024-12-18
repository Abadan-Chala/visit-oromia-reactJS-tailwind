import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const LogoClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const LinkClick = () => {
      setIsOpen(false);
      LogoClick();
  };

    return (
        <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
            <div className='container px-4 flex justify-between items-center h-16'>
                <Link to="/" onClick={LogoClick} className='border text-white rounded-full text-2xl font-bold bg-red-900 hover:bg-black transform transition duration-300 hover:scale-105 hover:text-red-800'>
                    OROMIA.
                </Link>

                <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                    <Link to="/" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white transform transition duration-300 hover:scale-105' onClick={LogoClick}>Home</Link>
                    <Link to="/gallery" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white transform transition duration-300 hover:scale-105' onClick={LogoClick}>Gallery</Link>
                    <Link to="/contact" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white transform transition duration-300 hover:scale-105' onClick={LogoClick}>Contact</Link>
                    <Link to="/about" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white transform transition duration-300 hover:scale-105' onClick={LogoClick}>About</Link>
                    <Link to="/login" className="rounded-full py-2 px-6 border bg-green-400 hover:bg-green-600 hover:text-white transform transition duration-300 hover:scale-105" onClick={LogoClick}>Login</Link>
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex space-y-6 py-4 flex-col bg-gray-700 bg-opacity-60 items-center'>
                    <Link to="/" className='rounded-full px-6 py-2 hover:text-green-300 transform transition duration-300 hover:scale-105' onClick={LinkClick}>Home</Link>
                    <Link to="/gallery" className='rounded-full px-6 py-2 hover:text-green-300 transform transition duration-300 hover:scale-105' onClick={LinkClick}>Gallery</Link>
                    <Link to="/contact" className='rounded-full px-6 py-2 hover:text-green-300 transform transition duration-300 hover:scale-105' onClick={LinkClick}>Contact</Link>
                    <Link to="/about" className='rounded-full px-6 py-2 hover:text-green-300 transform transition duration-300 hover:scale-105' onClick={LinkClick}>About</Link>
                    <Link to="/login" className="rounded-full py-2 px-6 border bg-green-600 hover:bg-green-500 hover:text-white transform transition duration-300 hover:scale-105" onClick={LinkClick}>Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;