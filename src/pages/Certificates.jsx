import React from 'react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div className='relative h-48 sm:h-56 md:h-64'>
        <img
          src={certificate.image}
          alt={certificate.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-4 sm:p-6'>
        <h3 className='text-lg sm:text-xl font-semibold mb-2'>
          {certificate.title}
        </h3>
        <p className='text-sm sm:text-base text-gray-600 mb-1'>
          {certificate.issuer}
        </p>
        <p className='text-primary font-medium text-sm sm:text-base mb-2'>
          {certificate.date}
        </p>
        <p className='text-xs sm:text-sm text-gray-600'>
          {certificate.description}
        </p>
      </div>
    </div>
  );
};

const AdditionalQualifications = () => (
  <div className='mt-12 sm:mt-16'>
    <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8'>
      Additional Qualifications
    </h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8'>
      <QualificationList
        title='Professional Experience'
        items={[
          '10+ years of professional makeup artistry',
          'Featured in multiple bridal magazines',
          'Worked with various celebrities and public figures',
        ]}
      />
      <QualificationList
        title='Specialized Skills'
        items={[
          'Airbrush makeup application',
          'Special effects makeup',
          'Fashion and editorial makeup',
        ]}
      />
    </div>
  </div>
);

const QualificationList = ({ title, items }) => (
  <div className='bg-gray-50 p-6 rounded-lg shadow-md'>
    <h3 className='text-xl sm:text-2xl font-semibold mb-4'>{title}</h3>
    <ul className='space-y-2 text-sm sm:text-base'>
      {items.map((item, index) => (
        <li key={index} className='flex items-center'>
          <span className='w-2 h-2 bg-primary rounded-full mr-2'></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

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
    <div className='py-8 sm:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12'>
          Certificates & Qualifications
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        <AdditionalQualifications />
      </div>
    </div>
  );
};

export default Certificates;
