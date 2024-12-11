import React from 'react';
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const services =[
    {
        icon: <FaPlane className='text -4xl text-blue-500'/>,
        title: 'Transportation',
        description: 'Wonchi lake is a picturesque crater lake which is located on the mountain range between the town of Ambo and Woliso. The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.'
    },
    {
        icon: <FaHotel className='text-4xl text-blue-500'/>,
        title: 'Hotel Booking',
        description: 'Bale Mountains National Park is a national park in Ethiopia. The park encompasses an area of approximately 2,150 km2 (830 sq mi) in the Bale Mountains and Sanetti Plateau of the Ethiopian Highlands.'
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-blue-500'/>,
        title: 'Beach Tours',
        description: 'Aba Jifar Palace is the most important heritage site in the Oromia Region of Ethiopia, and a symbol of Oromia cultural identity. Located on the outskirts of the city of Jimma, the capital of the region, the current Palace was built by King Aba Jifar II in the 1880s on a site located seven kilometers north of Jimma and chosen by the King’s father.'
    },
    {
        icon: <FaConciergeBell className='text-4xl text-blue-500'/>,
        title: 'Concierge Services',
        description: 'Entoto Natural Park is the unique place to discover the vastest primaeval mountain area with streams flowing out from clear springs and waterfall where it amazes with absolutely stunningly dramatic places for relaxation or completely hilarious water activities in diverse meandering streams which continues to naturally create hidden rock vaults.'
    },
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service, index) =>(
                <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
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
