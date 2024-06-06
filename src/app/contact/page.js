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
    <div>
      <h1>Contact Page</h1>
      <div>
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me using the following methods:</p>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
        <p>
          If you prefer I could reach out to you. Could you please fill out the
          form below:
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              placeholder="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
