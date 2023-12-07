"use client";
import React, { useState } from "react";
import { Button } from "@/components/atoms/button/base";
import FormFields from "@/components/molecules/form-fields";
import useSimpleForm from "@/model/interactions/use-form";
import Swal from "sweetalert2";
import { BsCheck } from "react-icons/bs";
import { translate } from "@/locales";

interface Props {
  id?: string;
}
function SimpleForm({ id }: Props) {
  const { formData, handleChange, handleSubmit } = useSimpleForm();
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
          <p className="text-orange-300 font-semibold  ">{translate("contactMcForm.title")}</p>
          <p className="text-[3rem] font-semibold">{translate("contactMcForm.subTitle")}</p>
        </div>
        <div className="w-fit mx-auto text-[1.185rem] max-w-xl justify-center items-center ">
          <p className="">
          {translate("contactMcForm.desc")}
          </p>
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
                {translate("contactMcForm.afterM")}
                </p>
                <div className="-mt-1 text-[2rem]">
                  <BsCheck></BsCheck>
                </div>{" "}
              </div>
            ) : (
              <Button
                className="bg-black hover:bg-mctekk-100 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full items-center justify-center"
                type="submit"
              >
                {translate("contactMcForm.button")}
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
