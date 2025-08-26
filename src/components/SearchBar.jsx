import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xs">
      {/* Search Icon */}
      <IoSearchSharp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search here..."
        className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
      />
    </div>
  );
};

export default SearchBar;
