import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";

const Navbar4 = () => {
  return (
    <nav className="p-4 flex justify-between items-center shadow-md bg-primary">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/images/logo.jpg" alt="logo" className="w-10 h-10 object-cover" />
        <span className="text-lg font-semibold font-primary">DonateDelight</span>
      </Link>

      {/* Search Bar (Hidden on sm, visible on md & lg) */}
      <div className="hidden md:block m-2 ml-14 w-1/3">
        <SearchBar />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        <NavLinks />
        <Link
          to="/donate"
          className="px-5 py-2 rounded-lg bg-secondary shadow-black shadow-lg font-medium hover:bg-opacity-90 transition"
        >
          DONATE NOW
        </Link>
      </div>

      {/* Mobile Menu */}
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar4;
