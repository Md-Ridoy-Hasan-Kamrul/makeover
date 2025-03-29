import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='py-16'>
      <div className='container'>
        <h1 className='section-title'>Contact Us</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>
            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-medium mb-2'>Address</h3>
                <p className='text-gray-600'>
                  123 Makeup Street
                  <br />
                  Beauty City, BC 12345
                </p>
              </div>
              <div>
                <h3 className='text-lg font-medium mb-2'>Contact</h3>
                <p className='text-gray-600'>
                  Phone: (123) 456-7890
                  <br />
                  Email: makeup@example.com
                </p>
              </div>
              <div>
                <h3 className='text-lg font-medium mb-2'>Business Hours</h3>
                <p className='text-gray-600'>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className='text-lg font-medium mb-2'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Instagram
                  </a>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Facebook
                  </a>
                  <a href='#' className='text-gray-600 hover:text-primary'>
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-6'>Book an Appointment</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='date'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Preferred Date
                </label>
                <input
                  type='date'
                  id='date'
                  name='date'
                  value={formData.date}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='service'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Service
                </label>
                <select
                  id='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                >
                  <option value=''>Select a service</option>
                  <option value='bridal'>Bridal Makeup</option>
                  <option value='bridal-party'>Bridal Party</option>
                  <option value='special-event'>Special Event</option>
                  <option value='editorial'>Editorial</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
                  required
                ></textarea>
              </div>
              <button type='submit' className='w-full btn btn-primary'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
