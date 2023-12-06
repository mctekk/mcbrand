"use client";
import React, { useState } from "react";
import { Button } from "@/components/atoms/button/base";
import FormFields from "@/components/molecules/form-fields";
import useGewaerForm from "@/model/interactions/use-gewaer-form";
import Swal from "sweetalert2";
import { BsCheck } from "react-icons/bs";

interface Props {
  id?: string;
}
function GewaerForm({ id }: Props) {
  const { formData, handleChange, handleSubmit } = useGewaerForm()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await handleSubmit();
      setFormSubmitted(true);
    } catch (error) {
      Swal.fire("Error", "An error occurred. Please try again later.", "error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="section" id={id}>
      <div className=" text-center">
        <div className="">
          <p className="text-black text-[1.825rem] font-semibold  ">Contact us</p>
        </div>
      </div>
      <div className="w-fit mx-auto mt-10">
        <form
          onSubmit={handleFormSubmit}
          className="rounded px-8 pt-6 pb-8 mb-4"
        >
          <FormFields formData={formData} onChange={handleChange}></FormFields>
          <div className="flex items-center justify-center w">
            {formSubmitted ? (
              <div className="flex">
                <p className="text-black text-[1.2rem] font-semibold">
                  Form submitted we will we will be with you soon
                </p>
                <div className="-mt-1 text-[2rem]">
                  <BsCheck></BsCheck>
                </div>{" "}
              </div>
            ) : (
              <Button
                className="bg-black hover:bg-gewaer-100 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full items-center justify-center"
                type="submit"
              >
                Send Message
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GewaerForm;
