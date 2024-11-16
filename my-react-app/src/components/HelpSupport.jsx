import React from 'react'
import FAQItem from "./FAQItem";
import ContactForm from "./ContactForm";

const HelpSupport = () => {
    const faqs = [
        { question: "How do I reset my password?", answer: "Go to settings > account > reset password." },
        { question: "How to delete a chat?", answer: "Swipe left on the chat and click delete." },
        { question: "How do I contact support?", answer: "Use the form below to send us a message." },
      ];
    
      return (
        <div className="bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16 py-10">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Help & Support</h1>
            <p className="text-gray-600 mt-2">Find answers or get in touch with us.</p>
          </div>
    
          {/* Search Bar */}
          <div className="relative mb-10">
            <input
              type="text"
              placeholder="Search for FAQs"
              className="w-full bg-white rounded-md shadow-md px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <span className="absolute top-3 right-4 text-gray-400">
              🔍
            </span>
          </div>
    
          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
    
          {/* Contact Form Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Support</h2>
            <ContactForm />
          </div>
        </div>
      );
}

export default HelpSupport