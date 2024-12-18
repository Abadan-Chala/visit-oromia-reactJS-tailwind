import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [sex, setSex] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!fullName || !email || !country || !date || !sex || !password) {
            alert("Please fill out all fields.");
            return;
        }

        
        setSubmitted(true);
    };

    const handleConfirm = () => {
        
        setMessage(`Welcome, ${fullName}! You have registered successfully!`);
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    const handleEdit = () => {
        
        setSubmitted(false);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6'>
                <h3 className='text-2xl font-bold mb-4 text-center'>Your Profile</h3>
                {message && <p className='text-green-500 text-center mb-4'>{message}</p>}
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2'>Full Name</label>
                            <input
                                type="text"
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter Your Full Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
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
                            <label className='block text-black-700 mb-2'>Country</label>
                            <input
                                type="text"
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter Your Country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2'>Date</label>
                            <input
                                type="date"
                                className='w-full p-2 border border-gray-300 rounded'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2'>Sex</label>
                            <select
                                className='w-full p-2 border border-gray-300 rounded'
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                                required
                            >
                                <option value="">Select Your Sex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2'>Password</label>
                            <input
                                type="password"
                                className='w-full p-2 border border-gray-300 rounded'
                                placeholder='Enter Your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700'
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className='flex flex-col items-center'>
                        <h4 className='text-lg font-bold mb-4'>Please confirm your details:</h4>
                        <p><strong>Full Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Country:</strong> {country}</p>
                        <p><strong>Your coming date:</strong> {date}</p>
                        <p><strong>Sex:</strong> {sex}</p>
                        <button
                            onClick={handleConfirm}
                            className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 mt-4'
                        >
                            Confirm
                        </button>
                        <button
                            onClick={handleEdit}
                            className='py-2 px-4 border border-gray-300 rounded hover:bg-gray-200 mt-2'
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleBackToHome}
                            className='py-2 px-4 border border-gray-300 rounded hover:bg-gray-200 mt-2'
                        >
                            Back to Home
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;