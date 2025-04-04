import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Use this if 'swiper-bundle.min.css' doesn't work

// Constants
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

const testimonials = [
  {
    name: 'Emily R.',
    review:
      'Absolutely loved my bridal makeup! It lasted all day and looked flawless in pictures. Highly recommended!',
  },
  {
    name: 'Sophia L.',
    review:
      'The attention to detail was amazing. I felt so confident and beautiful on my special day!',
  },
  {
    name: 'Sophia L.',
    review:
      'The attention to detail was amazing. I felt so confident and beautiful on my special day!',
  },
  {
    name: 'Sophia L.',
    review:
      'The attention to detail was amazing. I felt so confident and beautiful on my special day!',
  },
  {
    name: 'Sophia L.',
    review:
      'The attention to detail was amazing. I felt so confident and beautiful on my special day!',
  },
  {
    name: 'Sophia L.',
    review:
      'The attention to detail was amazing. I felt so confident and beautiful on my special day!',
  },
];

// Reusable Section Component
const Section = ({ title, children, bgColor = 'bg-white' }) => (
  <section className={`py-16 ${bgColor}`}>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='section-title text-center mb-12'>{title}</h2>
      {children}
    </div>
  </section>
);

// Hero Section Component
const HeroSection = () => (
  <section className='relative h-screen flex items-center justify-center'>
    <div className='absolute inset-0 bg-black/50 z-10' />
    <img
      src='/images/HERO.png'
      alt='Bridal Makeup'
      className='absolute inset-0 w-full h-full object-cover'
    />
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
);

// Featured Work Component
const FeaturedWork = () => (
  <Section title='Featured Work' bgColor='bg-gray-50'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {featuredImages.map((img, index) => (
        <div key={index} className='group relative overflow-hidden rounded-lg'>
          <img
            src={img}
            alt={`Featured Work ${index + 1}`}
            className='w-full h-auto sm:h-200 object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <Link to='/portfolio' className='text-white text-lg font-semibold'>
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// Services Component
const Services = () => (
  <Section title='Services'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {services.map(({ title, description }) => (
        <div
          key={title}
          className='p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow duration-300'
        >
          <h3 className='text-xl font-semibold mb-2'>{title}</h3>
          <p className='text-gray-600 text-base'>{description}</p>
        </div>
      ))}
    </div>
  </Section>
);

// Testimonials Component with Swiper
const Testimonials = () => (
  <Section title='Testimonials' bgColor='bg-gray-50'>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className='w-full'
    >
      {testimonials.map(({ name, review }, index) => (
        <SwiperSlide key={index}>
          <div className='p-6 bg-white rounded-lg shadow-md text-center'>
            <p className='text-gray-700 text-lg mb-4 italic'>"{review}"</p>
            <h4 className='text-xl font-semibold text-gray-900'>{name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Section>
);

// Home Component
const Home = () => (
  <div>
    <HeroSection />
    <Section title='About Me'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <img
          src='/images/certificate.jpg'
          alt='Makeup Artist'
          className='w-full rounded-lg shadow-lg object-cover max-h-[400px]'
        />
        <div>
          <p className='text-gray-600 mb-4 text-base sm:text-lg'>
            With over 5 years of experience in bridal makeup, I specialize in
            creating natural, radiant looks that enhance your natural beauty
            while making you feel confident and stunning on your special day.
          </p>
          <p className='text-gray-600 mb-6 text-base sm:text-lg'>
            My passion for makeup artistry and attention to detail ensures that
            every bride leaves feeling beautiful and camera-ready.
          </p>
          <Link to='/portfolio' className='btn btn-primary'>
            View My Work
          </Link>
        </div>
      </div>
    </Section>
    <FeaturedWork />
    <Services />
    <Testimonials />
  </div>
);

export default Home;
