import React from "react";
import PolicyItem from "./PolicyItem";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information that you provide directly to us, such as when you create an account, update your profile, or contact customer support. Additionally, we may automatically collect information about your device and usage patterns.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to provide, maintain, and improve our services. This includes personalizing your experience, communicating with you, and ensuring the security of our platform.",
    },
    {
      title: "Sharing Your Information",
      content:
        "We may share your information with third parties to provide essential services, comply with legal obligations, or protect our rights. However, we do not sell your data to advertisers.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, modify, or delete your personal information. Additionally, you can opt out of certain data collection practices through your account settings.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy or our data practices, please contact us at support@example.com.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-8 lg:px-16 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600 mt-2">
          Learn how we handle your personal information.
        </p>
      </div>

      {/* Privacy Policy Sections */}
      <div className="space-y-6">
        {policies.map((policy, index) => (
          <PolicyItem key={index} title={policy.title} content={policy.content} />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
