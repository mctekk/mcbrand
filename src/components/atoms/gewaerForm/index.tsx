import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {  BsCheck2 } from "react-icons/bs";


export function GewaerEmailForm  () {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.trim()) {
      showError("Please enter a valid email");
      return;
    }

    
    setLoading(true);

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
        <form onSubmit={handleSubmit} className="space-y-2 flex-col">
          <div className="flex-col md:flex-row md:space-x-2 space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow h-10 p-3 mr-1"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              className="w-24 h-10 bg-white  text-gewaer-100 font-semibold relative"
              disabled={loading}
            >
              {loading && (
                <span className="absolute  inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gewaer-100"></div>
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


