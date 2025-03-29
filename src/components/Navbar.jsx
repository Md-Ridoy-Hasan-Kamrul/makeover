import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='text-2xl font-bold text-primary'>
            Makeup Artist
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className='text-gray-600 hover:text-primary transition-colors duration-300'
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className='md:hidden text-gray-600'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className='block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-300'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
