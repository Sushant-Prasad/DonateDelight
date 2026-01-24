import { Link } from "react-router-dom"; 
import Stats from "../components/Stats";
import NGOsSection from "../components/NGOsSection";
import StatsSection from "../components/StatsSection";

const HeroSection = () => {
  return (
    <section className="bg-background1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[650px] px-6 md:px-12 lg:px-16">
        {/* Left: Info Section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-normal">
            Make a Difference with Your{" "}
            <span className="text-[#34dace]">Donation</span>
          </h1>
          <p className="text-gray-800 xl:max-w-[500px] font-primary">
            Donate money, food, clothes, and other essentials directly to NGOs
            and help those in need. Every small contribution counts!
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <Link to="/donate">
              <button className="bg-primary text-gray-900 shadow-lg border border-gray-400 hover:border-gray-950 max-h-12 font-semibold py-3 px-6 rounded-md hover:scale-105 transition-transform duration-300">
                Donate Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src="/images/17.jpg"
            alt="Donation Image"
            className="w-[320px] md:w-[450px] lg:w-[550px] xl:w-[700px] object-cover"
          />
        </div>
      </div>

      {/* Additional Sections */}
     
      <StatsSection />
      <NGOsSection />
    </section>
  );
};

export default HeroSection;
