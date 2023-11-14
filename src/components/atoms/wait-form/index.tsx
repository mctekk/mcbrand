import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface EmailFormProps {
  // Puedes eliminar las propiedades onSuccess y onError de aquí
}

const EmailForm: React.FC<EmailFormProps> = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica del correo electrónico
    if (!email || !email.trim()) {
      showError("Por favor, introduce un correo electrónico válido.");
      return;
    }

    // Enviar el correo electrónico a la API de CRM
    try {
      const response = await axios.post(
        "https://crm.api.dealerappcenter.com/v2/receivers/0bd19a61-28d2-4a44-9755-e291a3785f9c/lead",
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
        showSuccess("Correo electrónico enviado con éxito");
        setEmail("")
      } else {
        showError("Error al enviar el correo electrónico.");
      }
    } catch (error) {
      showError("Error al enviar el correo electrónico.");
    }
  };

  const showSuccess = (message: string) => {
    Swal.fire({
      icon: "success",
      title: "Éxito",
      text: message,
    });
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
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-10 p-3 mr-5 rounded"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          className="p-2 px-5 bg-white rounded text-sky-600 font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
