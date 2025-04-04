import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Contact', path: '/contact' },
];

const Logo = () => (
  <Link to='/' className='flex items-center h-full'>
    <img
      src='/images/LOGO.png'
      alt='Logo'
      className='h-20 w-auto object-contain'
    />
  </Link>
);

const DesktopNav = () => (
  <div className='hidden md:flex space-x-8'>
    {navItems.map(({ name, path }) => (
      <Link
        key={name}
        to={path}
        className='text-gray-700 hover:text-primary font-medium transition-colors duration-300'
      >
        {name}
      </Link>
    ))}
  </div>
);

const MobileNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='md:hidden bg-white border-t border-gray-200'>
      <div className='px-4 pt-4 pb-4 space-y-2'>
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            onClick={onClose}
            className='block px-3 py-2 rounded-md text-gray-700 hover:text-primary font-medium transition-colors duration-200'
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-24'>
          <Logo />

          <DesktopNav />

          {/* Mobile Menu Toggle Button */}
          <button
            className='md:hidden text-gray-700 focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle Menu'
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      <MobileNav isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
