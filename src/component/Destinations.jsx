import React from 'react';

const destinations =[
    {
        image: 'assets/wanchi',
        title: 'Wanchi Natural Lake',
        description: 'Wonchi lake is a picturesque crater lake which is located on the mountain range between the town of Ambo and Woliso. The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.'
    },
    {
        image: 'assets/bale',
        title: 'Bale Mountains NationalPark',
        description: 'Bale Mountains National Park is a national park in Ethiopia. The park encompasses an area of approximately 2,150 km2 (830 sq mi) in the Bale Mountains and Sanetti Plateau of the Ethiopian Highlands.'
    },
    {
        image: 'assets/AbbaJifar',
        title: 'Abba Jifar Palace',
        description: 'Aba Jifar Palace is the most important heritage site in the Oromia Region of Ethiopia, and a symbol of Oromia cultural identity. Located on the outskirts of the city of Jimma, the capital of the region, the current Palace was built by King Aba Jifar II in the 1880s on a site located seven kilometers north of Jimma and chosen by the King’s father.'
    },
    {
        image: 'assets/Entoto park.jpg',
        title: 'Intoto Natural Park',
        description: 'Entoto Natural Park is the unique place to discover the vastest primaeval mountain area with streams flowing out from clear springs and waterfall where it amazes with absolutely stunningly dramatic places for relaxation or completely hilarious water activities in diverse meandering streams which continues to naturally create hidden rock vaults.'
    },
];

const Destinations = () => {
  return (
    <div className='py-12 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-6xl font-bold text-center mb-10 hover:text-green-700 transform transition duration-300 hover:scale-105'>Popular Destinations</h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destinations.map((city, index) =>(
                <div key={index} className='bg-gray-100 rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={city.image} alt={city.title} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110' />
                    <div className='p-4'>
                        <h3 className='text-xl font-bold mb-2 hover:text-green-600 transform transition duration-300 hover:scale-105'>{city.title}</h3>
                        <p className='text-gray-600 hover:text-gray-700 transform transition duration-300 hover:scale-105'>{city.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
