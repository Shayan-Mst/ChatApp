import React, { useState } from "react";

const PolicyItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 transition-all transform hover:-translate-y-1 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Content Section with Smooth Height Transition */}
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
};

export default PolicyItem;
