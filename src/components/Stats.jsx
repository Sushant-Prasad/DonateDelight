import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Stats = () => {
  const stats = useSelector((state) => state.Stats);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-background3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full px-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center bg-gradient-to-r from-fourth to-secondary p-6 rounded-2xl shadow-md w-full text-center hover:scale-110 transition"
          >
            <div className="text-5xl">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
            <p className="text-gray-800">{stat.label}</p>
          </div>
        ))}
      </div>
      <Link to ="/donate">
      <button className="mt-6 bg-third text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-[#70fae5] transition  font-bold ">
        Join Our Cause
      </button>
      </Link>
    </div>
  );
};

export default Stats;
