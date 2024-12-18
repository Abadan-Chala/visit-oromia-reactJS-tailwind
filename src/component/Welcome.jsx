import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        
        setSuccess(true);
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105'>
                {success ? (
                    <div className='text-center'>
                        <h3 className='text-2xl font-bold mb-4'>Success!</h3>
                        <p className='mb-4'>You have successfully sent your message!</p>
                    </div>
                ) : (
                    <>
                        <h3 className='text-3xl font-bold mb-4 text-center'>Welcome to Oromia!</h3>
                        <p className='mb-4 text-center'>
                            We are thrilled to have you here. Please fill out the form below to get in touch with us.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-black-700 mb-2'>Name</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded'
                                    placeholder='Enter Your Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-black-700 mb-2'>Email</label>
                                <input
                                    type="email"
                                    className='w-full p-2 border border-gray-300 rounded'
                                    placeholder='Enter Your Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-black-700 mb-2'>Message</label>
                                <textarea
                                    rows={5}
                                    className='w-full p-2 border border-gray-300 rounded'
                                    placeholder='Write your message here'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type='submit'
                                className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 transform transition duration-300 hover:scale-105'
                            >
                                Send Message
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Welcome;