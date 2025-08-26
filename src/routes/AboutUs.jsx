import React from "react";
import FAQs from "../components/FAQs";
import HowItWorks from "../components/HowItWorks";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src="./images/30.jpg"
            alt="About DonateDelight"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About <span className="text-fourth">DonateDelight</span></h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DonateDelight is a platform that connects generous donors with NGOs across India. 
            Our mission is to make donating easy, transparent, and impactful. Whether you want 
            to donate food, clothes, or funds, DonateDelight ensures that your contributions 
            reach the right hands.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe in bringing a change by leveraging technology for social good. With 
            real-time tracking and a seamless donation process, we ensure that every contribution 
            makes a meaningful difference.
          </p>
          
        </div>

      </div>
      <HowItWorks />
      <FAQs />
    </section>
  );
};

export default AboutUs;
