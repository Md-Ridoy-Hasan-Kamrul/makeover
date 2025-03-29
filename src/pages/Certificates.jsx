import React from 'react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Professional Makeup Artistry',
      issuer: 'Makeup Institute of Beauty',
      date: '2020',
      image: '/certificates/cert-1.jpg',
      description: 'Advanced makeup techniques and bridal specialization',
    },
    {
      id: 2,
      title: 'Bridal Makeup Mastery',
      issuer: 'International Beauty Academy',
      date: '2019',
      image: '/certificates/cert-2.jpg',
      description: 'Specialized training in bridal and special occasion makeup',
    },
    {
      id: 3,
      title: 'Airbrush Makeup Certification',
      issuer: 'Beauty Pro Academy',
      date: '2021',
      image: '/certificates/cert-3.jpg',
      description: 'Professional airbrush makeup application techniques',
    },
    {
      id: 4,
      title: 'Fashion and Editorial Makeup',
      issuer: 'Global Beauty Institute',
      date: '2018',
      image: '/certificates/cert-4.jpg',
      description: 'Advanced techniques for fashion and editorial makeup',
    },
    {
      id: 5,
      title: 'Special Effects Makeup',
      issuer: 'Makeup Artistry Academy',
      date: '2022',
      image: '/certificates/cert-5.jpg',
      description: 'Special effects and creative makeup techniques',
    },
    {
      id: 6,
      title: 'Beauty Business Management',
      issuer: 'Professional Beauty Association',
      date: '2023',
      image: '/certificates/cert-6.jpg',
      description:
        'Business management and client relations for makeup artists',
    },
  ];

  return (
    <div className='py-16'>
      <div className='container'>
        <h1 className='section-title'>Certificates & Qualifications</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-48'>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{cert.title}</h3>
                <p className='text-gray-600 mb-2'>{cert.issuer}</p>
                <p className='text-primary font-medium mb-2'>{cert.date}</p>
                <p className='text-gray-600'>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Qualifications Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Additional Qualifications
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>
                Professional Experience
              </h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  10+ years of professional makeup artistry
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  Featured in multiple bridal magazines
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  Worked with various celebrities and public figures
                </li>
              </ul>
            </div>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold mb-4'>Specialized Skills</h3>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  Airbrush makeup application
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  Special effects makeup
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
                  Fashion and editorial makeup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
