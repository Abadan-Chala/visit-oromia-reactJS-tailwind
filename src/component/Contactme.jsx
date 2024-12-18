import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contactme = () => {
  return (
    <div className='bg-gray-200'>
      <div>
        <h2 className='text-4xl md:text-6xl font-bold text-center mb-10 hover:text-green-700 transform transition duration-300 hover:scale-105'>Contact Us</h2>
      </div>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-gray-100 rounded-lg shadow-md p-6 hover:text-green-900 transform transition duration-300 hover:scale-105'>
                <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                <div className='flex items-center mb-4'>
    <FaEnvelope className='text-blue-500 mr-2' />
    <a href="https://visitoromia.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline >
            <div className='bg-gray-100 rounded-lg shadow-md p-6 hover:text-green-900 transform transition duration-300 hover:scale-105">
        Visit Oromia
    </a>
</div>
                <div className='flex items-center mb-4'>
                    <FaPhone className='text-blue-500 mr-2'/>
                    <p>+251 928 103 575</p>
                </div> 
                <div  className='flex items-center'>
                    <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                    <p>Oromia,Ethiopia</p>
                </div> 
            </div>

            <div className='bg-gray-100 rounded-lg shadow-md p-6 hover:text-green-900 transform transition duration-300 hover:scale-105'>
                <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                <form>
                    <div className='mb-4'>
                        <label className='block text-black-700 mb-2'>Name</label>
                        <input type="text" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Your Name' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black-700 mb-2'>Email</label>
                        <input type="email" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Your Email' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-black-700 mb-2'>Message</label>
                        <textarea rows={5} className='w-full p-2 border border-gray-300 rounded' placeholder='Write Message here' id=""></textarea>
                    </div>
                    <button type='submit' className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transform transition duration-300 hover:scale-105'>Send Message</button>
                </form>
            </div>
        </div>
     </div>

    </div>


  );
}

export default Contactme;
