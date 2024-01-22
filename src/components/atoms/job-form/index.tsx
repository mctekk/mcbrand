"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "emailjs-com";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cv: string;
  coverLetter: string;
}

const Formulario: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cv: "",
    coverLetter: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Configuración de Email.js
    const templateParams = {
      from_name: formData.firstName + " " + formData.lastName,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      cv: formData.cv,
      cover_letter: formData.coverLetter,
    };

    // Envío del formulario por correo electrónico
    emailjs
      .send(
        "service_zutthwt",
        "template_87gid45",
        templateParams,
        "B92bpwawsFzQtGkex"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSubmitSuccess(true);
          setSubmitError(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            cv: "",
            coverLetter: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error);
          setSubmitError(true);
          setSubmitSuccess(false);
        }
      );
  };

  return (
    <div className="py-20 ">
      <div className="max-w-2xl mx-auto mt-8  ">
        <a
          href="/jobs"
          className=" bg-mctekk-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Go back 
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md "
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name :
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Second Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cv"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            CV:
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf, .doc, .docx"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cover Letter:
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {submitSuccess && (
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">¡Well done!</p>
            <p>Form sent.</p>
          </div>
        )}
        {submitError && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">¡Error!</p>
            <p>
              Error!!
            </p>
          </div>
        )}
        <button
          type="submit"
          className="bg-mctekk-100  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Formulario;
