import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqsLeft = [
  { question: "How Can I Donate Food?", answer: "You can donate food via our partner NGOs by selecting the food donation option on our website." },
  { question: "How Do I Know My Donation Is Used Well?", answer: "We ensure transparency by providing updates and reports on how your donations are utilized." },
  { question: "Is My Donation Tax-Exempted?", answer: "Yes, all donations made through our platform are eligible for tax exemption as per government regulations." },
];

const faqsRight = [
  { question: "Can I Donate On Someone Else’s Behalf?", answer: "Yes, you can donate in someone else's name and receive a receipt for the donation." },
  { question: "Can I Specify Where I Want My Donation To Go?", answer: "Yes, you can choose a specific NGO or cause while making a donation." },
  { question: "Do You Accept Food Donations Or Only Monetary Donations?", answer: "We accept both food and monetary donations, depending on the NGO’s needs." },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
        <div className="w-16 h-1 bg-fourth mt-2 mx-auto"></div>
      </h2>

      {/* Two columns layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {faqsLeft.map((faq, index) => {
            const isOpen = openIndex === `left-${index}`;
            return (
              <div key={index} className="bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
                <button
                  className="w-full flex justify-between items-center px-5 py-4 hover:bg-gray-200 transition"
                  onClick={() => toggleFAQ(`left-${index}`)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {isOpen ? <FaChevronUp className="text-fourth" /> : <FaChevronDown className="text-fourth" />}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 py-2 px-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-4">
          {faqsRight.map((faq, index) => {
            const isOpen = openIndex === `right-${index}`;
            return (
              <div key={index} className="bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
                <button
                  className="w-full flex justify-between items-center px-5 py-4 hover:bg-gray-200 transition"
                  onClick={() => toggleFAQ(`right-${index}`)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {isOpen ? <FaChevronUp className="text-fourth" /> : <FaChevronDown className="text-fourth" />}
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 py-2 px-5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
