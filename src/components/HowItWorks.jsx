import React from "react";
import { FaDonate, FaHandsHelping, FaCheckCircle, FaUsers } from "react-icons/fa";

const steps = [
  { icon: <FaUsers className="text-fourth text-3xl" />, title: "Sign Up", desc: "Create your account to start donating." },
  { icon: <FaDonate className="text-fourth text-3xl" />, title: "Select An NGOs", desc: "Select one from various NGOs Across India." },
  { icon: <FaHandsHelping className="text-fourth text-3xl" />, title: "Donate", desc: "Contribute money, food, clothes, orother items securely." },
  { icon: <FaCheckCircle className="text-fourth text-3xl" />, title: "Get Confirmation", desc: "Receive updates on how your donation is used." },
];

const HowItWorks = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
      <div className="w-16 h-1 bg-fourth mx-auto mb-8"></div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
