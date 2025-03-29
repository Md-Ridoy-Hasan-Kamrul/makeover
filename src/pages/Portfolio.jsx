import { useState } from 'react';

import React from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      image: '/portfolio/bridal-1.jpg',
      description: 'Soft and romantic bridal makeup',
    },
    {
      id: 2,
      category: 'bridal',
      title: 'Glamorous Bride',
      image: '/portfolio/bridal-2.jpg',
      description: 'Dramatic and elegant bridal makeup',
    },
    {
      id: 3,
      category: 'editorial',
      title: 'Fashion Editorial',
      image: '/portfolio/editorial-1.jpg',
      description: 'High fashion makeup look',
    },
    {
      id: 4,
      category: 'editorial',
      title: 'Beauty Campaign',
      image: '/portfolio/editorial-2.jpg',
      description: 'Commercial beauty makeup',
    },
    {
      id: 5,
      category: 'special',
      title: 'Red Carpet Glam',
      image: '/portfolio/special-1.jpg',
      description: 'Celebrity event makeup',
    },
    {
      id: 6,
      category: 'special',
      title: 'Party Makeup',
      image: '/portfolio/special-2.jpg',
      description: 'Special occasion makeup',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className='py-16'>
      <div className='container'>
        <h1 className='section-title'>Portfolio</h1>

        {/* Category Filter */}
        <div className='flex justify-center space-x-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='group relative overflow-hidden rounded-lg shadow-lg'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white'>
                <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                <p className='text-center'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
