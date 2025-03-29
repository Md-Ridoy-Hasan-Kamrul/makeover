import { Link } from 'react-router-dom';

import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center'>
        <div className='absolute inset-0 bg-black/50 z-10'></div>
        <div className='absolute inset-0'>
          <img
            src='/hero-bg.jpg'
            alt='Bridal Makeup'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='relative z-20 text-center text-white px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Professional Bridal Makeup
          </h1>
          <p className='text-xl md:text-2xl mb-8'>
            Making your special day even more beautiful
          </p>
          <Link to='/contact' className='btn btn-primary'>
            Book Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <h2 className='section-title'>About Me</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <img
                src='/about.jpg'
                alt='Makeup Artist'
                className='rounded-lg shadow-lg'
              />
            </div>
            <div>
              <p className='text-gray-600 mb-4'>
                With over 10 years of experience in bridal makeup, I specialize
                in creating natural, radiant looks that enhance your natural
                beauty while making you feel confident and stunning on your
                special day.
              </p>
              <p className='text-gray-600 mb-6'>
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

      {/* Featured Work */}
      <section className='py-16 bg-gray-50'>
        <div className='container'>
          <h2 className='section-title'>Featured Work</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='group relative overflow-hidden rounded-lg'
              >
                <img
                  src={`/featured-${item}.jpg`}
                  alt={`Featured Work ${item}`}
                  className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110'
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

      {/* Services */}
      <section className='py-16 bg-white'>
        <div className='container'>
          <h2 className='section-title'>Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Bridal Makeup',
                description:
                  'Professional makeup application for your wedding day',
              },
              {
                title: 'Bridal Party',
                description: 'Makeup services for the entire bridal party',
              },
              {
                title: 'Special Events',
                description: 'Makeup services for special occasions and events',
              },
            ].map((service) => (
              <div
                key={service.title}
                className='p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300'
              >
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
