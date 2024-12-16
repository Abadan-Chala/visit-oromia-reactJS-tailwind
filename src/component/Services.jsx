import React from 'react';
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const services =[
    {
        icon: <FaPlane className='text -4xl text-blue-500'/>,
        title: 'Transportation',
        description: 'At Visit Oromia, we prioritize your comfort and convenience with our reliable transportation services. Our fleet of modern vehicles is designed to provide a safe and enjoyable travel experience, whether you are exploring urban landscapes or venturing into the scenic countryside. Each ride is staffed by professional drivers who are knowledgeable about the local area, ensuring you not only reach your destination smoothly but also gain insights along the way. From airport transfers to guided tours, our transportation options are tailored to meet your needs, allowing you to relax and fully immerse yourself in the beauty and culture of Oromia.'
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500'/>,
        title: 'Hotel Booking',
        description: 'We make hotel booking a seamless and stress-free experience, ensuring you find the perfect accommodation for your stay. Our extensive network of partner hotels ranges from luxurious resorts to cozy boutique stays, catering to every budget and preference. Our dedicated team is committed to helping you choose the ideal location, whether you want to be near bustling city centers or tranquil natural landscapes. With our user-friendly booking platform, you can easily compare options, check availability, and secure your reservations with just a few clicks. Experience exceptional hospitality and comfort as you explore the captivating beauty of Oromia, all while knowing that your lodging needs are in expert hands.'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500'/>,
        title: 'Beach Tours',
        description: 'At Visit Oromia, our beach tours offer an unforgettable escape to stunning coastal destinations, blending relaxation with adventure. Experience the breathtaking beauty of pristine beaches while enjoying activities like snorkeling, paddleboarding, and beach volleyball. Our knowledgeable guides will lead you through the region’s rich culture and history, ensuring you discover hidden gems along the shoreline. Whether you are looking to unwind under the sun or embark on exciting water sports, our beach tours cater to all preferences, making every moment a cherished memory. Join us for a perfect seaside getaway that showcases the best of Oromia’s coastal treasures!'
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500'/>,
        title: 'Concierge Services',
        description: 'At Visit Oromia, our Concierge Services are designed to enhance your travel experience by providing personalized assistance tailored to your needs. Whether you require help with restaurant reservations, activity bookings, or local recommendations, our dedicated concierge team is here to ensure every detail is taken care of. From arranging guided tours to sourcing transportation and providing insights into the best hidden gems in Oromia, we strive to make your journey as enjoyable and stress-free as possible. With our expertise and local knowledge, you can focus on creating unforgettable memories while we handle the logistics, making your stay truly exceptional.'
    },
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-10'>Our Services</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service, index) =>(
                <div key={index} className='bg-gray-100 rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <div className='mb-4'>{service.icon}</div>
                   
                        <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>
                  
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
