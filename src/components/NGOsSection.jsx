import { useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import NGOCardSmall from "./NGOCardSmall";
import { Link } from "react-router";

const NGOsSection = () => {
  const NGOs = useSelector((state) => state.NGOs);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-[#ddd9f2]">
    <div className="container mx-auto p-6 ">
      {/* Header with "View All" button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Featured NGOs</h2>
        <button className="bg-third text-gray-800 px-5 py-2 rounded-md shadow-md hover:bg-[#70fae5] transition duration-300 font-bold">
          <Link to="/ngos" className="flex items-center gap-2">
          View All <FaArrowRight />
          </Link>
        </button>
      </div>

      {/* NGO Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {NGOs.slice(0, 4).map((ngo) => (
          <NGOCardSmall key={ngo.id} NGOs={ngo} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default NGOsSection;
