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
    const [confirmDialog, setConfirmDialog] = useState(false);
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
        setSubmitted(false); // Reset submitted state
        setConfirmDialog(false); // Close confirmation dialog
    };

    const handleBackToHome = () => {
        setConfirmDialog(true);
    };

    const confirmNavigation = (confirm) => {
        if (confirm) {
            navigate('/');
        } else {
            setConfirmDialog(false);
        }
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    // Get today's date in YYYY-MM-DD format for the min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='bg-white rounded-lg shadow-md p-6 hover:transform transition duration-300 hover:scale-105'>
                <h3 className='text-2xl font-bold mb-4 text-center text-green-900 hover:text-green-600 transform transition duration-300 hover:scale-105'>Your Profile</h3>
                {message && <p className='text-green-500 text-center mb-4'>{message}</p>}
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Form Fields */}
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Full Name</label>
                            <input
                                type="text"
                                className='w-full p-2 border border-gray-300 rounded '
                                placeholder='Enter Your Full Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Email</label>
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
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Country</label>
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
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Date</label>
                            <input
                                type="date"
                                className='w-full p-2 border border-gray-300 rounded'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                min={today} // Set min date to today's date
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Sex</label>
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
                            <label className='block text-black-700 mb-2 hover:text-green-800 transform transition duration-300 hover:scale-105'>Password</label>
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
                            className='py-2 px-4 bg-green-600 text-white rounded hover:bg-green-800 transform transition duration-300 hover:scale-105'
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-bold mb-4'>Please confirm your details:</h3>
                        <p><strong>Full Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Country:</strong> {country}</p>
                        <p><strong>Your coming date:</strong> {date}</p>
                        <p><strong>Sex:</strong> {sex}</p>
                        <button
                            onClick={handleConfirm}
                            className='py-2 px-4 bg-green-600 text-white rounded mt-4 hover:bg-green-800 transform transition duration-300 hover:scale-105'
                        >
                            Confirm
                        </button>
                        <button
                            onClick={handleEdit}
                            className='py-2 px-4 border border-gray-300 rounded bg-gray-100 hover:bg-gray-300 mt-2'
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>

            {confirmDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md hover:transform transition duration-300 hover:scale-105">
                        <h4 className="text-lg font-bold">Are you sure you want to go back to the home page?</h4>
                        <div className="mt-4">
                            <button
                                onClick={() => confirmNavigation(true)}
                                className='py-2 px-4 bg-green-500 text-white rounded hover:bg-green-700 mr-2'
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => confirmNavigation(false)}
                                className='py-2 px-4 border border-gray-300 rounded bg-gray-100 hover:bg-gray-200'
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Centered Welcome Message and Back Button */}
            {message && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <p className='text-green-600 text-lg font-bold'>{message}</p>
                        <button
                            onClick={() => navigate('/')}
                            className='py-2 px-4 bg-green-600 text-white rounded hover:bg-green-800 mt-4'
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;