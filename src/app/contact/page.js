'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  let [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  let [formSubmitted, setFormSubmitted] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData(Object.assign({}, formData, { [name]: value }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill out all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Page</h1>
      <div>
        <h1 className="text-xl font-bold mb-2">Contact Me</h1>
        <p>Feel free to reach out to me using the following methods:</p>
        <ul className="list-disc pl-4 mb-4">
          <li>Email: example@example.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
        <p>
          If you prefer I could reach out to you. Could you please fill out the
          form below:
        </p>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="fullName" className="block mb-1">
              Full Name
            </label>
            <input
              placeholder="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <textarea
              placeholder="email"
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <input
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
        {formSubmitted && <p>Thank you for submitting the form!</p>}
      </div>
    </div>
  );
}
