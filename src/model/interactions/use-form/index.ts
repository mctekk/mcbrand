import { useState } from 'react';
import emailjs from 'emailjs-com';
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

  const sendEmail = (templateParams: any) => {
    const SERVICE_ID = 'service_zutthwt';
    const TEMPLATE_ID = 'template_8hxriok';
    const USER_ID = 'B92bpwawsFzQtGkex';

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
  };

  const handleSubmit = async () => {
    const { name, companyName, email, budget, message } = formData;

    const templateParams = {
      name,
      companyName,
      email,
      budget,
      message,
    };

    try {
      const response = await sendEmail(templateParams);
      console.log('Email sent:', response);
      Swal.fire('Success', 'Email sent successfully!', 'success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire('Error', 'Failed to send email.', 'error');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useSimpleForm;
