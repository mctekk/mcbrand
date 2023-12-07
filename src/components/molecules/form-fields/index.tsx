// FormFields.tsx
import React from "react";
import Input from "@/components/atoms/input";

import Textarea from "@/components/atoms/text-area";
import { translate } from "@/locales";

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
           {translate("contactMcFormField.name")}
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
           {translate("contactMcFormField.companyName")}
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
           {translate("contactMcFormField.email")}
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
          {translate("contactMcFormField.phone")}
        </label>
        <Input
          type="phone"
          name="Phone"
          placeholder="Your Phone"
          value={formData.budget}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="message"
        >
           {translate("contactMcFormField.description")}
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
