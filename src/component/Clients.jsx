import React from 'react';

const testimonials =[
    {
        name: 'James',
        image: '/assets/james.jpg',
        text: 'During my recent visit to Oromia, Ethiopia, I was profoundly moved by the rich culture and warm hospitality of the Oromo people. From the stunning landscapes of the Bale Mountains to the vibrant markets filled with traditional crafts and spices, every moment was a new discovery. I had the privilege of participating in a traditional coffee ceremony, which beautifully symbolizes the significance of coffee in Oromo culture. The locals shared their stories, showcasing their deep connection to the land and their unwavering spirit. This experience not only broadened my understanding of Ethiopia`s diverse heritage but also left me with lasting friendships and cherished memories. Oromia truly embodies the essence of community and tradition, making it a remarkable destination for any traveler.',
        location:'USA'
    },
    {
        name: 'Hannah',
        image: '/assets/Sarah.jpg',
        text: 'My visit to Oromia, Ethiopia, was an unforgettable experience, especially exploring the breathtaking landscapes of Wanchi Lake and Bale National Park. Wanchi Lake, with its stunning blue waters surrounded by lush greenery, offered a serene escape that felt like a hidden paradise. I enjoyed a peaceful boat ride, taking in the incredible views while learning about the local flora and fauna. Later, my adventure continued in Bale National Park, where I was awed by the diverse wildlife, including the rare Ethiopian wolf and captivating birds. Hiking through the park’s rugged terrain, I felt a deep connection to nature and the vibrant ecosystems that thrive there. The beauty and tranquility of Oromia, paired with the warmth of its people, left a lasting impression on my heart, making it a destination I will cherish forever.',
        location:'Germany'},
    {
        name: 'Pauls',
        image: '/assets/paul.jpg',
        text: 'My journey to Oromia, Ethiopia, was a deeply enriching experience that opened my eyes to the rich histories and vibrant cultures of the Oromo people. From the moment I arrived, I was captivated by the stories of resilience and pride that echoed through the villages. I had the privilege of participating in traditional ceremonies, where I learned about the significance of the Gadaa system, an age-old democratic governance structure that highlights the community`s commitment to equality and justice. The warmth and hospitality of the Oromo people made me feel like part of their extended family, as they shared their music, dances, and delicious local cuisine, which reflected their diverse heritage. Each encounter deepened my appreciation for their customs and traditions, leaving me with a profound respect for a culture that has thrived for centuries amidst change. My time in Oromia has inspired me to share these stories and celebrate the rich tapestry of Oromo culture with others back home in Australia.',
        location:'Australia' },
    // {
    //     name: 'David',
    //     image: '/assets/chadrik.jpg',
    //     text: 'My visit to Oromia, Ethiopia, was a breathtaking journey into nature's wonders that left me in awe of its stunning landscapes. From the moment I arrived, I was captivated by the lush greenery of the highlands, the rolling hills, and the vibrant wildflowers that painted the scenery in a kaleidoscope of colors. Exploring the majestic Bale Mountains, I marveled at the diverse ecosystems, where I encountered rare wildlife and listened to the soothing sounds of nature. The pristine beauty of Wanchi Lake, with its crystal-clear waters reflecting the surrounding mountains, provided a perfect backdrop for moments of tranquility and reflection. Each hike and scenic viewpoint revealed yet another breathtaking vista, making me appreciate the unspoiled wilderness of Oromia. The region`s natural beauty, combined with its rich biodiversity, has truly inspired me and will remain etched in my memory long after my journey back to Germany.',
    //     location:'UK'
    //  },
];

const Clients = () => {
  return (
    <div className='py-12 bg-gray-200'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-6xl font-bold text-center mb-10 hover:text-green-700 transform transition duration-300 hover:scale-105'>Testimonials</h2>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
            {testimonials.map((testimonials, index) =>(
                <div key={index} className='bg-gray-100 rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <img src={testimonials.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4'/>
                   
                        <h3 className='text-xl font-bold mb-2 text-green-700'>{testimonials.name}</h3>
                        <p className='text-gray-700 font-bold'>{testimonials.location}</p>
                        <p className='text-gray-500 italic'>{testimonials.text}</p>
                  
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
