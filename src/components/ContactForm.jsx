import React from "react";
import { Button } from "react-scroll";

const ContactForm = () => {
  return (
    <div className="p-4 text-left">
      <form
        action="https://getform.io/f/c92609fe-8967-482f-a667-d90cfd9614b6"
        method="POST"
      >
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">name</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="capitalize text-sm py-2 font-light">phone</label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">email</label>
            <input
              type="email"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="capitalize text-sm py-2 font-light">
              message
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
            <button type="submit" className="inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;