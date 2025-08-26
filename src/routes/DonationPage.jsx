import { useState } from "react";
import ClothesForm from "../components/ClothesForm";
import DonateForm from "../components/DonateForm";
import FoodForm from "../components/FoodForm";
import PaymentForm from "../components/PaymentForm";
import OtherForm from "../components/OtherForm";

const DonationPage = () => {
  const [selectedDonationType, setSelectedDonationType] = useState(null);

  // Function to handle donation type submission from DonateForm
  const handleDonationTypeSubmit = (donationType) => {
    setSelectedDonationType(donationType);
  };

  return (
    <div className="max-w-5xl mx-auto bg-background1 p-8 rounded-lg shadow-lg mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-gray-800 font-primary text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal">
            Make a Difference!
          </h2>
          <p className="text-gray-950 xl:max-w-[500px] font-primary text-2xl">
            Your donations help those in need. Whether it's money, food, clothes, or other essentials, every contribution counts.
            Choose an NGO and make an impact today!
          </p>
          <img src="/images/login-bg.png" alt="Donation" className="w-full h-[250px] rounded-lg shadow-md" />
        </div>

        {/* Right Column (Forms) */}
        <div>
          {selectedDonationType === null && <DonateForm onDonationSubmit={handleDonationTypeSubmit} />}
          {selectedDonationType === "money" && <PaymentForm />}
          {selectedDonationType === "food" && <FoodForm />}
          {selectedDonationType === "clothes" && <ClothesForm />}
          {selectedDonationType === "other" && <OtherForm />}
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
