import { useState } from 'react';
import React from 'react';

// Category Buttons Component
const CategoryButtons = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className='flex justify-center space-x-4 mb-12 flex-wrap'>
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => setSelectedCategory(category.id)}
        className={`px-6 py-2 rounded-full transition-colors duration-300 mb-2 ${
          selectedCategory === category.id
            ? 'bg-primary text-[#E96D9D]'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
);

// Portfolio Item Component
const PortfolioItem = ({ item }) => (
  <div className='group relative overflow-hidden rounded-lg shadow-lg bg-white'>
    <img
      src={item.image}
      alt={item.title}
      className='w-full h-auto sm:h-200 object-cover transition-transform duration-300 group-hover:scale-110'
    />
    <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white'>
      <h3 className='text-xl sm:text-2xl font-semibold mb-2'>{item.title}</h3>
      <p className='text-center text-sm sm:text-base'>{item.description}</p>
    </div>
  </div>
);

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Define categories and portfolio items
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'editorial', name: 'Editorial' },
    { id: 'special', name: 'Special Events' },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Natural Bridal Look',
      image: '/images/1.jpg',
      description: 'Soft and romantic bridal makeup',
    },
    {
      id: 2,
      category: 'bridal',
      title: 'Glamorous Bride',
      image: '/images/2.jpg',
      description: 'Dramatic and elegant bridal makeup',
    },
    {
      id: 3,
      category: 'editorial',
      title: 'Fashion Editorial',
      image: '/images/3.jpg',
      description: 'High fashion makeup look',
    },
    {
      id: 4,
      category: 'editorial',
      title: 'Beauty Campaign',
      image: '/images/4.jpg',
      description: 'Commercial beauty makeup',
    },
    {
      id: 5,
      category: 'special',
      title: 'Red Carpet Glam',
      image: '/images/5.jpg',
      description: 'Celebrity event makeup',
    },
    {
      id: 6,
      category: 'special',
      title: 'Party Makeup',
      image: '/images/6.jpg',
      description: 'Special occasion makeup',
    },
  ];

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='container max-w-7xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-12'>
          Portfolio
        </h1>

        {/* Category Filter */}
        <CategoryButtons
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
