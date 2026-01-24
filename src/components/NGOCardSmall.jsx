// Desc: This file contains the NGOCard component which is used to display the NGO information in a card format.
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const NGOCardSmall = ( {NGOs} ) => {
  const onDonate = () => {
    alert(`Thank you for your interest in donating to ${NGOs.NGOName}!`);
  };
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-60">
      {/* NGO Image */}
      <img
        src={NGOs.NGOImage}
        alt={NGOs.NGOName}
        className="w-full h-50 object-cover"
      />

      {/* NGO Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{NGOs.NGOName}</h2>
        <a
          href={NGOs.NGOWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Website
        </a>
        <div className="mt-4">
          {/* NGO Address */}
          <div className="flex items-center text-gray-600 mb-4">
          <IoLocationSharp className="mr-2 text-2xl text-fourth" />
            <span>{NGOs.NGOAddress}</span>
          </div>
          {/* Donate Button */}
          <Link to="/donate">
          <button
            className="w-full bg-primary text-gray-800 py-2 rounded-lg hover:bg-third transition"
          >
            DONATE NOW
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NGOCardSmall;
