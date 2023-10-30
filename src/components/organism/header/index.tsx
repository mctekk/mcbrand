"use client";
import React, { Fragment, ReactNode, useState } from "react";

import {  MdMenu } from 'react-icons/md';
import { Button } from "@/components/atoms/button/base";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";


interface Props {
  menu: ReactNode;
  className?: string
  logo: string
  iconColor: string
}

export default function Header({menu,className,logo,iconColor}:Props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={`lg:flex lg:justify-center lg:items-center  gap-6 text-[1.0625rem] text-black pt-7 w-full lg:ml-0  sm:ml-0  ${className}`}>
      <div className="flex justify-between px-4 py-2">
        <div className="w-full">
          <a className=" lg:ml-0   w-[11.25rem] h-[2.875rem] flex" href="/">
            <Image src={logo} alt="logo" width={200} height={24} />
          </a>
        </div>
        <Button
          className="md:flex lg:hidden flex rounded-lg mt-2 py-2 pl-3 pr-3.5  "
          onClick={openModal}
        >
          <MdMenu className={`text-[2rem] ${iconColor} -mt-4`}  />
        </Button>
      </div>
      <div className="hidden lg:flex ">
        {menu}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Dialog.Panel>
          <nav
            className={`${
              isOpen
                ? `md:flex md:flex-col right-0 w-3/4 h-screen absolute top-0  shadow-xl  transition-transform transform-gpu duration-300 md:w-3/4  ${className} `
                : "hidden"
            }`}
          >
            {isOpen ? (
              <Image className="pt-6 p-5 " src={logo} alt="Logo" width={800} height={24}></Image>
            ) : (
              ""
            )}

           {menu}
          </nav>
          </Dialog.Panel>
          
        </Dialog>
      </Transition>
    </div>
  );
}


