import React from 'react';

const testimonials =[
    {
        name: 'james',
        image: '/assets/james.jpg',
        text: 'The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.',
        location:'Sydney, Australia'
    },
    {
        name: 'Sarah',
        image: '/assets/Sarah.jpg',
        text: 'The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.',
        location:'Sydney, Australia'},
    {
        name: 'Paul',
        image: '/assets/paul.jpg',
        text: 'The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.',
        location:'Sydney, Australia' },
    {
        name: 'David',
        image: '/assets/chadrik.jpg',
        text: 'The lake is the beautiful legacy of a once powerful volcano erupting in the Tertiary period of the Cenozoic Era. The volcano erupted about 1000 years ago and left asymmetric caldera of rock which is now covered in lush green vegetation.',
        location:'Sydney, Australia'
     },
];

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Testimonials</h2>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {testimonials.map((testimonials, index) =>(
                <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <img src={testimonials.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4'/>
                   
                        <h3 className='text-xl font-bold mb-2'>{testimonials.name}</h3>
                        <p className='text-gray-600'>{testimonials.location}</p>
                        <p className='text-gray-600 italic'>{testimonials.text}</p>
                  
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
