// FormFields.tsx
import React from "react";
import Input from "@/components/atoms/input";

import Textarea from "@/components/atoms/text-area";

interface FormData {
  name: string;
  companyName: string;
  email: string;
  budget: string;
  message: string;
}

interface FormFieldsProps {
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

function FormFields({ formData, onChange }: FormFieldsProps) {
  return (
    <div>
      <div className="flex space-x-10">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={onChange}
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
          <Input
            type="text"
            name="companyName"
            placeholder="Your company name"
            value={formData.companyName}
            onChange={onChange}
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
        <Input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={onChange}
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
          value={formData.budget}
          onChange={onChange}
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
        <Textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default FormFields;