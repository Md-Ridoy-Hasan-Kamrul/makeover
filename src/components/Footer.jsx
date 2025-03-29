import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='mb-2'>Email: makeup@example.com</p>
            <p className='mb-2'>Phone: (123) 456-7890</p>
            <p>Address: 123 Makeup Street, Beauty City</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-primary transition-colors'>
                <FaInstagram size={24} />
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='hover:text-primary transition-colors'>
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Business Hours</h3>
            <p className='mb-2'>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className='mb-2'>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
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
