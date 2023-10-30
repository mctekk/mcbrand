"use client";
import React from "react";

import { Button } from "@/components/atoms/button/base";
import FormFields from "@/components/molecules/form-fields";
import useSimpleForm from "@/model/interactions/use-form";

function SimpleForm() {
  const { formData, handleChange, handleSubmit } = useSimpleForm();

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
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
        <form onSubmit={submitForm} className="rounded px-8 pt-6 pb-8 mb-4">
          <FormFields formData={formData} onChange={handleChange}></FormFields>
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
