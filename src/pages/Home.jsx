import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Professional makeup application for your wedding day',
  },
  {
    title: 'Bridal Party',
    description: 'Makeup services for the entire bridal party',
  },
  {
    title: 'Special Events',
    description: 'Makeup services for special occasions and events',
  },
];

const featuredImages = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg'];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/50 z-10' />
        <div className='absolute inset-0'>
          <img
            src='/images/HERO.png'
            alt='Bridal Makeup'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='relative z-20 text-center text-white px-4 max-w-xl'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight'>
            Professional Bridal Makeup
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl mb-6'>
            Making your special day even more beautiful
          </p>
          <Link to='/contact' className='btn btn-primary inline-block'>
            Book Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='section-title text-center mb-12'>About Me</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            <img
              src='/images/certificate .jpg'
              alt='Makeup Artist'
              className='w-full rounded-lg shadow-lg object-cover max-h-[400px]'
            />
            <div>
              <p className='text-gray-600 mb-4 text-base sm:text-lg'>
                With over 10 years of experience in bridal makeup, I specialize
                in creating natural, radiant looks that enhance your natural
                beauty while making you feel confident and stunning on your
                special day.
              </p>
              <p className='text-gray-600 mb-6 text-base sm:text-lg'>
                My passion for makeup artistry and attention to detail ensures
                that every bride leaves feeling beautiful and camera-ready.
              </p>
              <Link to='/portfolio' className='btn btn-primary'>
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='section-title text-center mb-12'>Featured Work</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {featuredImages.map((img, index) => (
              <div
                key={index}
                className='group relative overflow-hidden rounded-lg'
              >
                <img
                  src={img}
                  alt={`Featured Work ${index + 1}`}
                  className='w-full h-auto sm:h-200 object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <Link
                    to='/portfolio'
                    className='text-white text-lg font-semibold'
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='section-title text-center mb-12'>Services</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {services.map((service) => (
              <div
                key={service.title}
                className='p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300'
              >
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600 text-base'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
