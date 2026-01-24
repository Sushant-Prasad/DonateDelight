import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Function to close menu when a link is clicked
  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary"
        onClick={toggleNavbar}
      >
        {mobileDrawerOpen ? (
          <IoMdClose className="text-3xl text-gray-800" />
        ) : (
          <IoMdMenu className="text-3xl text-gray-800" />
        )}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform ${
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 bg-primary shadow-md">
          <Link to="/" className="flex items-center gap-2" onClick={closeNavbar}>
            <img src="/images/logo.jpg" alt="logo" className="w-10 h-10 object-cover" />
            <span className="text-lg font-semibold font-primary text-gray-950">
              DonateDelight
            </span>
          </Link>
          <button onClick={toggleNavbar} className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-secondary">
            <IoMdClose className="text-3xl text-gray-900" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-4 mt-4 px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:gap-8 items-start">
              <Link to="/" className="font-medium text-gray-700 hover:bg-gray-100 w-full py-3 rounded-lg transition" onClick={closeNavbar}>
                Home
              </Link>
              <Link to="/about" className="font-medium text-gray-700 hover:bg-gray-100 w-full py-3 rounded-lg transition" onClick={closeNavbar}>
                About Us
              </Link>
              <Link to="/ngos" className="font-medium text-gray-700 hover:bg-gray-100 w-full py-3 rounded-lg transition" onClick={closeNavbar}>
                NGOs
              </Link>
              <Link to="/login" className="font-medium text-gray-700 hover:bg-gray-100 w-full py-3 rounded-lg transition" onClick={closeNavbar}>
                Login
              </Link>
            </div>
          </div>
          <Link to="/donate" className="my-4 px-5 py-3 rounded-lg bg-secondary text-gray-900 font-medium hover:bg-opacity-90 transition text-center" onClick={closeNavbar}>
            DONATE NOW
          </Link>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
