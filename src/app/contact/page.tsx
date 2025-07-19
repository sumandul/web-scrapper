// pages/contact.tsx
"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { Loader } from "lucide-react";




// Define the type for the form data
interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    message: "",
  });

  // Handle input changes with proper event typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with proper event typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading
    emailjs
      .send(
        'service_5pzvor7', // e.g., 'service_xyz'
        'template_9t35wyr', // e.g., 'template_abc'
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          workEmail: formData.workEmail,
          phone: formData.phone,
          message: formData.message,
        },
        'N7pXJXEUTSOKDMnOo' // e.g., 'user_xxx' or new key from emailjs dashboard
      )
      .then(
        () => {
          // console.log('Success:', result.text);
          toast.success("Message sent successfully!");
          setLoading(false); // Stop loading
          // alert('Message sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            workEmail: '',
            phone: '',
            message: '',
          });
        },
        () => {
    
          toast.error("Failed to send message. Please try again.");
        
        }
      );
  };

  return (
    <div className="relative px-4 py-8">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Map Section */}
      <div className="h-[300px] lg:h-[90vh] w-full lg:w-1/2">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7808691587647!2d85.33108!3d27.7240513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193d715cea8b%3A0x418750086aca9843!2sGen%20Z%20Global%20Education%20and%20Visa%20Services%20%7C%20best%20consultancy%20in%20baluwatar%20%7C%20best%20consultancy%20in%20Kathmandu!5e0!3m2!1sen!2snp!4v1749780179886!5m2!1sen!2snp"
    className="w-full h-full rounded-lg border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gen Z Global Location"
  />
</div>

      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 bg-white rounded-md shadow-md p-6">
        <h1 className="text-2xl font-semibold text-GenZ-secondary mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-600 mb-6">
          Have questions? Fill out the form below and we will get back to you soon.
        </p>
  
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your First Name"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your Last Name"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
  
          <div className="my-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-GenZ-secondary flex items-center justify-center text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            {loading && <Loader className="animate-spin mr-2 h-4 w-4" />}
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
