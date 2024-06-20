"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { storage } from "../../../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface FormState {
  name: string;
  lastName: string;
  email: string;
  phone?: string;
  position: string; // Nuevo campo
  resume: File | null;
  coverLetter?: string;
}

const ContactFormCv: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      setFormState((prev) => ({
        ...prev,
        resume: files[0],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formState.resume) {
      try {
        const fileRef = ref(storage, `uploads/${formState.resume.name}`);
        await uploadBytes(fileRef, formState.resume);
        const fileUrl = await getDownloadURL(fileRef);

        const formData = {
          name: formState.name,
          lastName: formState.lastName,
          email: formState.email,
          phone: formState.phone,
          position: formState.position,
          resumeUrl: fileUrl,
          coverLetter: formState.coverLetter,
        };

        await fetch(
          "https://script.google.com/macros/s/AKfycbxVB0MvWhbzrZvKT0R42vlMnys_bwOMPXE6ksa_v3K7zGOQPzSulVyt7raUj4g_Wj8ahw/exec",
          {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
          }
        );

        setSubmitSuccess(true);
        setSubmitError(false);
        setFormState({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          resume: null,
          coverLetter: "",
        });
      } catch (error) {
        console.error("Error:", error);
        setSubmitSuccess(false);
        setSubmitError(true);
      }
    } else {
      alert("Please select a resume to upload.");
    }
  };

  return (
    <div className="pb-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name*:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name*:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email*:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone (not required):
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Position Applied For*:
          </label>
          <select
            id="position"
            name="position"
            value={formState.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Quality Assurance Specialist">Quality Assurance Specialist</option>
            <option value="Backend Developer">Backend Developer </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="resume"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Resume (PDF or DOC)*:
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf, .doc, .docx, .jpg, .png, .xlsx"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="coverLetter"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cover Letter (not required):
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formState.coverLetter}
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
            <p>Thanks for sending your request. You will be contacted in case we proceed with your application.</p>
          </div>
        )}
        {submitError && (
          <div
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
            role="alert"
          >
            <p className="font-bold">¡Error!</p>
            <p>Error!!</p>
          </div>
        )}
        <button
          type="submit"
          className="bg-mctekk-100 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactFormCv;
