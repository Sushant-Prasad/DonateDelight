import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white">
        <Navbar />
      </div>

      {/* Main Content (With Padding to Avoid Overlapping Navbar) */}
      <main className="flex-1 overflow-y-auto  pt-[80px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
