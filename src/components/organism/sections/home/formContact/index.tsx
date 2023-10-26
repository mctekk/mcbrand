"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Swal from 'sweetalert2'
import { Button } from "@/components/atoms/button/base";
import { clear } from "console";

interface FormData {
  name: string;
  companyName: string;
  email: string;
  budget: string;
  message: string;
}

function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
    budget: "",
    message: "",
  });
  const initialFormData: FormData = {
    name: '',
    companyName: '',
    email: '',
    budget: '',
    message: '',
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, companyName, email, budget, message } = formData;
  
    const templateParams = {
      name,
      companyName,
      email,
      budget,
      message,
    };
  
    const SERVICE_ID = 'service_zutthwt';
    const TEMPLATE_ID = 'template_8hxriok';
    const USER_ID = 'B92bpwawsFzQtGkex';
  
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(
        (response) => {
          console.log('Email sent:', response);
          Swal.fire('Success', 'Email sent successfully!', 'success');
          setFormData(initialFormData)
        },
        (error) => {
          console.error('Error sending email:', error);
          Swal.fire('Error', 'Failed to send email.', 'error');
        }
    );

  };

  return (
    <div className="section  ">
      <div className="w-fit justify-center items-center mx-auto">
        <p className="text-orange-300 font-semibold w-fit ">Contact us</p>
        <p className="text-[3rem] font-semibold">Let's work together!</p>
      </div>
      <div className="w-fit mx-auto text-[1.185rem] max-w-2xl justify-center items-center ">
        <p>
          MCTEKK is dedicated to problem-solving, creating solutions, and
          growing businesses across all America. We’re here to help you develop
          your product.
        </p>
      </div>
      <div className="w-fit mx-auto mt-10 ">
        <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex space-x-10">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="companyName"
                id="companyName"
                placeholder="Your company name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="budget"
            >
              Budget
            </label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="$10,000">$10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="To be determined">To be determined</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              name="message"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center w">
            <Button
              className="bg-black hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full items-center justify-center"
              type="submit"
             
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
