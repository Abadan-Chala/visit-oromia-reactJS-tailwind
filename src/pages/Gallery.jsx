import React from 'react';

const images =[
    '/assets/bgImage.jpg',
    '/assets/bale',
    '/assets/irecha.jpg',
    '/assets/horse2.jpg',
    '/assets/chilada.jpg',
    '/assets/horse.jpg',
    '/assets/tulu.jpg',
    '/assets/harsade.jpg',
];
const Gallery = () => {
  return (
    <div>
    <div className='relative h-screen bg-cover bg-center h-96' style={{backgroundImage : "url('/assets/bg2')"}}>
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
      </div>
    </div>
        <div>
            <div>
                {images.map(image=> (
                    <div>
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Gallery;
