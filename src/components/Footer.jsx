import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const ContactInfo = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Contact Us</h3>
    <p className='text-sm sm:text-base mb-2 break-all'>
      Email: myshamuna94@gmail.com
    </p>
    <p className='text-sm sm:text-base mb-2'>Phone: +880 1533-484921</p>
    <p className='text-sm sm:text-base'>
      Address: Bashundhara, Opposite of Jamuna Future Park, Joar Shahara,
      Dhaka-1229.
    </p>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Follow Us</h3>
    <div className='flex items-center space-x-6'>
      <a
        href='https://www.instagram.com/myshas_makeover'
        className='hover:text-pink-400 transition-colors'
        aria-label='Instagram'
      >
        <FaInstagram size={22} />
      </a>
      <a
        href='https://www.facebook.com/myshasmakeover'
        className='hover:text-blue-500 transition-colors'
        aria-label='Facebook'
      >
        <FaFacebook size={22} />
      </a>
      <a
        href='#'
        className='hover:text-blue-300 transition-colors'
        aria-label='Twitter'
      >
        <FaTwitter size={22} />
      </a>
    </div>
  </div>
);

const BusinessHours = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Business Hours</h3>
    <p className='text-sm sm:text-base mb-2'>
      Saturday - Friday: 6:00 AM - 6:00 PM
    </p>
  </div>
);

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <ContactInfo />
          <SocialLinks />
          <BusinessHours />
        </div>

        <div className='mt-10 pt-6 border-t border-gray-800 text-center text-sm sm:text-base'>
          <p>
            &copy; {new Date().getFullYear()} Makeup Artist Portfolio. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
