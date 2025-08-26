
import CountUp from "react-countup";
import { FaHandHoldingHeart, FaBuilding, FaUsers, FaRupeeSign } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { id: 1, icon: <FaHandHoldingHeart />, label: "Total Donations Made", value: 50000, suffix: "+" },
    { id: 2, icon: <FaBuilding />, label: "Registered NGOs", value: 1500, suffix: "+" },
    { id: 3, icon: <FaUsers />, label: "Active Donors", value: 20000, suffix: "+" },
    { id: 4, icon: <FaRupeeSign />, label: "Funds Raised", value: 10, suffix: "+ Crore" },
  ];

  return (
    <section className="py-16 bg-background3">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Making an Impact Together
        </h2>
        <p className="text-center text-gray-800 mt-2">
          Your generosity has transformed thousands of lives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center bg-gray-300 p-6 rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl text-fourth">{stat.icon}</div>
              <h3 className="text-2xl font-semibold mt-3">
                <CountUp start={0} end={stat.value} duration={3} separator="," suffix={stat.suffix} />
              </h3>
              <p className="text-gray-700 mt-1 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      {/* Join Our Cause */}
      <div className="flex justify-center mt-10">
          <a
            href="/donate"
            className="bg-third text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#70fae5] "
          >
            Join Our Cause
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
