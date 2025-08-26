import { useSelector } from "react-redux";
import NGOCard from "../components/NGOCard";
import { useState } from "react";

const NGOsList = () => {
  const NGOs = useSelector((state) => state.NGOs);
  const [search, setSearch] = useState(""); 

  // Filter NGOs based on search input (by name or address)
  const filteredNGOs = NGOs.filter((NGO) =>
    NGO.NGOName.toLowerCase().includes(search.toLowerCase()) ||
    NGO.NGOAddress.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-background3 min-h-screen">
      <div className="p-5">
        {/* Responsive Search Input */}
        <input
          type="text"
          placeholder="Search by NGO Name or Address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#efd8f0] w-full p-3 mb-4 border border-gray-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary sm:w-3/4 lg:w-1/2 mx-auto block"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-primary">
          Registered NGOs
        </h2>

        {filteredNGOs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNGOs.map((NGO) => (
              <NGOCard key={NGO.id} NGOs={NGO} />
            ))}
          </div>
        ) : (
          // No NGOs Found Message
          <p className="text-center text-gray-900  mt-10 text-4xl">
            🚫 No NGOs found matching your search!!
          </p>
        )}
      </div>
    </div>
  );
};

export default NGOsList;
