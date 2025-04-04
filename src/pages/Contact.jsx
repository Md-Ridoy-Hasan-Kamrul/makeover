import { useState } from 'react';
import emailjs from 'emailjs-com';

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
    // EmailJS service and template details
    const serviceID = 'your_service_id'; // Replace with your Service ID
    const templateID = 'your_template_id'; // Replace with your Template ID
    const userID = 'your_user_id'; // Replace with your User ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      service: formData.service,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        console.log('Message sent successfully', response);
        alert('Your message has been sent successfully!');
      },
      (error) => {
        console.error('Error sending message', error);
        alert(
          'There was an error sending your message. Please try again later.'
        );
      }
    );
  };

  return (
    <div className='py-8 sm:py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='section-title text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12'>
          Contact Us
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

const ContactInfo = () => (
  <div>
    <h2 className='text-xl sm:text-2xl font-semibold mb-6'>Get in Touch</h2>
    <div className='space-y-6'>
      <ContactDetail
        title='Address'
        content='123 Makeup Street, Beauty City, BC 12345'
      />
      <ContactDetail
        title='Contact'
        content='Phone: (123) 456-7890 Email: makeup@example.com'
      />
      <ContactDetail
        title='Business Hours'
        content='Monday - Friday: 9:00 AM - 6:00 PM Saturday: 10:00 AM - 4:00 PM Sunday: Closed'
      />
      <FollowUs />
    </div>
  </div>
);

const ContactDetail = ({ title, content }) => (
  <div>
    <h3 className='text-lg sm:text-xl font-medium mb-2'>{title}</h3>
    <p className='text-sm sm:text-base text-gray-600'>{content}</p>
  </div>
);

const FollowUs = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-medium mb-2'>Follow Us</h3>
    <div className='flex space-x-4'>
      <SocialLink
        href='https://www.instagram.com/myshas_makeover'
        label='Instagram'
      />
      <SocialLink
        href='https://www.facebook.com/myshasmakeover'
        label='Facebook'
      />
      <SocialLink href='#' label='Twitter' />
    </div>
  </div>
);

const SocialLink = ({ href, label }) => (
  <a href={href} className='text-gray-600 hover:text-primary'>
    {label}
  </a>
);

const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <div className='bg-white p-6 sm:p-8 rounded-lg shadow-lg'>
    <h2 className='text-xl sm:text-2xl font-semibold mb-6'>
      Book an Appointment
    </h2>
    <form onSubmit={handleSubmit} className='space-y-6'>
      <FormInput
        label='Name'
        id='name'
        value={formData.name}
        handleChange={handleChange}
      />
      <FormInput
        label='Email'
        id='email'
        value={formData.email}
        handleChange={handleChange}
        type='email'
      />
      <FormInput
        label='Phone'
        id='phone'
        value={formData.phone}
        handleChange={handleChange}
        type='tel'
      />
      <FormInput
        label='Preferred Date'
        id='date'
        value={formData.date}
        handleChange={handleChange}
        type='date'
      />
      <FormSelect
        label='Service'
        id='service'
        value={formData.service}
        handleChange={handleChange}
      />
      <FormTextArea
        label='Message'
        id='message'
        value={formData.message}
        handleChange={handleChange}
      />
      <button
        type='submit'
        className='w-full px-6 py-3 bg-primary text-[#E96D9D] font-semibold rounded-md hover:bg-primary-dark focus:ring-primary focus:ring-2'
      >
        Send Message
      </button>
    </form>
  </div>
);

const FormInput = ({ label, id, value, handleChange, type = 'text' }) => (
  <div>
    <label
      htmlFor={id}
      className='block text-sm sm:text-base font-medium text-gray-700 mb-2'
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
      required
    />
  </div>
);

const FormSelect = ({ label, id, value, handleChange }) => (
  <div>
    <label
      htmlFor={id}
      className='block text-sm sm:text-base font-medium text-gray-700 mb-2'
    >
      {label}
    </label>
    <select
      id={id}
      name={id}
      value={value}
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
);

const FormTextArea = ({ label, id, value, handleChange }) => (
  <div>
    <label
      htmlFor={id}
      className='block text-sm sm:text-base font-medium text-gray-700 mb-2'
    >
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      rows='4'
      className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary'
      required
    ></textarea>
  </div>
);

export default Contact;
