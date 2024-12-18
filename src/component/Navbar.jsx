import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
            <div className='container px-4 flex justify-between items-center h-16'>
                <Link to="/" className='border text-white rounded-full text-2xl font-bold bg-red-700 hover:bg-black '>`OROMIA.</Link>

                <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                    <Link to="/" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white'>Home</Link>
                    <Link to="/gallery" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white'>Gallery</Link>
                    <Link to="/contact" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white'>Contact</Link>
                    <Link to="/about" className='rounded-full px-6 py-2 hover:bg-gray-500 hover:text-white'>About</Link>

                    <Link to="/login" className="rounded-full py-2 px-6 border bg-green-400 hover:bg-green-600 hover:text-white">Login</Link>

                    {/* <button className="rounded-full py-2 px-6 border bg-green-400 hover:bg-green-600 hover:text-white">Sign Up</button> */}
                </div>

                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden flex space-y-6 py-4 flex-col bg-gray-600 bg-opacity-50 items-center'>
                    <Link to="/" className='rounded-full px-6 py-2 hover:bg-gray-600 hover:text-white' onClick={handleLinkClick}>Home</Link>
                    <Link to="/gallery" className='rounded-full px-6 py-2 hover:bg-gray-600 hover:text-white' onClick={handleLinkClick}>Gallery</Link>
                    <Link to="/contact" className='rounded-full px-6 py-2 hover:bg-gray-600 hover:text-white' onClick={handleLinkClick}>Contact</Link>
                    <Link to="/about" className='rounded-full px-6 py-2 hover:bg-gray-600 hover:text-white' onClick={handleLinkClick}>About</Link>
                    <button className="rounded-full py-2 px-6 border bg-green-600 hover:bg-green-500 hover:text-white" onClick={handleLinkClick}>Login</button>
                    {/* <button className="rounded-full py-2 px-6 border bg-green-600 hover:bg-green-500 hover:text-white" onClick={handleLinkClick}>Sign Up</button> */}
                </div>
            )}
        </nav>
    );
}

export default Navbar;