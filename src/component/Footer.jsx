import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div>
        <div>
            <h2>Oromia Tourism Agency</h2>
            <p>Biiroo Aadaaf Tuurizimii Oromiyaa OTA BATO</p>
        </div>
        <div>
            <h2>Quick Links</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
        <div>
            <h3>Follow Us</h3>
            <div>
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                <FaYoutube/>
            </div>
            <form>
                <input type="email" placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </form>
        </div>
      </div>
      <div>
        <p>&copy; Abadan Chala. All rights reserved.</p>
        <div>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms Of Services</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
