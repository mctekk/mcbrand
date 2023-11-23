"use client"
import { useState } from 'react';
import Swal from 'sweetalert2';

export interface FormData {
  name: string;
  companyName: string;
  email: string;
  budget: string;
  message: string;
}

interface UseSimpleFormHook {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => Promise<void>;
}

const useSimpleForm = (): UseSimpleFormHook => {
  const initialFormData: FormData = {
    name: '',
    companyName: '',
    email: '',
    budget: '$10,000',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, companyName, email, budget, message } = formData;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        companyName,
        email,
        budget,
        message,
      }),
    };

    try {
      const response = await fetch("https://crm.api.salesassist.io/v2/receivers/b45a28bf-92bb-4c17-b1d6-0ce2ca5fb110/lead", requestOptions);

      if (response.ok) {
        console.log('Data sent successfully');
        Swal.fire('Success', 'Data sent successfully!', 'success');
        setFormData(initialFormData);
      } else {
        console.error('Failed to send data');
        Swal.fire('Error', 'Failed to send data.', 'error');
      }
    } catch (error) {
      console.error('Error sending data:', error);
      Swal.fire('Error', 'Failed to send data.', 'error');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useSimpleForm;
