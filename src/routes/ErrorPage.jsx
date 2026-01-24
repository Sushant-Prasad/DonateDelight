import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background1 px-6">
      <div className="text-center">
      <img  
        src="./public/images/404.svg"
        alt="404 Illustration"
        className="w-full max-w-md  mt-8"
      />
      
      <h2 className="text-gray-950 mt-2">The page you are looking for does not exist.</h2>
        <Link
          to="/"
          className="mt-6 inline-block bg-background2 text-gray-800 px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#8172cc] transition"
        >
          Go Back Home
        </Link>
      </div>

     
    </div>
  );
};

export default ErrorPage;
