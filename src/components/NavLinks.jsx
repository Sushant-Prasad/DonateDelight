import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const location = useLocation(); // Get current path

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col md:flex-row md:gap-8 items-center ">
      <Link
        to="/"
        className={`font-medium  py-2 px-1 rounded transition duration-100   ${
          isActive("/") ? 'bg-third':'hover:bg-third'
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`font-medium  py-2 px-1 rounded transition duration-100   ${
          isActive("/about") ? 'bg-third':'hover:bg-third'
        }`}
      >
        About-Us
      </Link>
      <Link
        to="/ngos"
        className={`font-medium  py-2 px-1 rounded transition duration-100   ${
          isActive("/ngos") ? 'bg-third':'hover:bg-third'
        }`}
      >
        NGOs
      </Link>
      <Link
        to="/login"
        className={`font-medium  py-2 px-1 rounded transition duration-100   ${
          isActive("/login") ? 'bg-third':'hover:bg-third'
        }`}
      >
        Login
      </Link>
    </div>
  );
};

export default NavLinks;
