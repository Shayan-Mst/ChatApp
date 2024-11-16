import React from "react";

const ContactForm = () => {
  return (
    <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">Your Name</label>
        <input
          type="text"
          className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Your Email</label>
        <input
          type="email"
          className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Message</label>
        <textarea
          className="w-full bg-gray-100 rounded-md px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
