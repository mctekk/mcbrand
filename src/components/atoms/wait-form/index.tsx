import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BsBookmarkFill, BsCheck, BsCheck2 } from "react-icons/bs";

interface EmailFormProps {
  // Puedes eliminar las propiedades onSuccess y onError de aquí
}

const EmailForm: React.FC<EmailFormProps> = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica del correo electrónico
    if (!email || !email.trim()) {
      showError("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Iniciar el estado de carga
    setLoading(true);

    // Enviar el correo electrónico a la API de CRM
    try {
      const response = await axios.post(
        "https://crm.api.salesassist.io/v2/receivers/0bd19a61-28d2-4a44-9755-e291a3785f9c/lead",
        {
          email,
          description: "KanvasLanding",
          people: {
            contacts: [
              {
                contacts_types_id: 1,
                value: email,
              },
            ],
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );

      if (response.status === 200) {
        setEmail("");
        setSubmitted(true);
      } else {
        showError("Try again");
      }
    } catch (error) {
      showError("Try again");
    } finally {
      setLoading(false);
    }
  };


  const showError = (message: string) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
    });
  };

  return (
    <div className="">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow h-10 p-3 rounded"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="w-32 h-10 bg-white rounded text-sky-600 font-semibold relative"
              disabled={loading}
            >
              {loading && (
                <span className="absolute  inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sky-600"></div>
                </span>
              )}
              {!loading && (
                <p className={loading ? "text-white" : ""}>Subscribe</p>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-white text-[1.3rem]">
          <p className="flex ">Thanks for subscribing! <div className="mt-1 ml-2 text-[1.6rem]"><BsCheck2/></div></p>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
