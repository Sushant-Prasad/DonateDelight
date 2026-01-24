import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat px-4">
      {/* Card Container */}
      <div className="w-full max-w-4xl bg-white/30 backdrop-blur-md shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Info Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-10 bg-gradient-to-r from-primary to-secondary text-gray-900">
          <h2 className="text-4xl font-bold text-center ">Welcome to DonateDelight</h2>
          <p className="mt-4 text-lg text-center">
            Join us in making a difference. Log in to donate, support NGOs, and spread kindness.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 flex flex-col items-center">
            <FaUserCircle className="text-5xl text-fourth" />
            <br /> Log-In
          </h2>

          {/* Form Container */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email Address */}
            <div>
              <label className="block font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              {errors.emailAddress && (
                <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>
              )}
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 
                  ${errors.emailAddress ? "border-red-400" : "border-gray-300"}`}
                {...register("emailAddress", {
                  required: "Email Address is required...",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="flex justify-between text-sm">
                <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#20b3b3] text-white font-semibold rounded-md shadow-md 
                hover:bg-[#7fffd4] hover:text-black transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Log In"}
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-700">
              Don't have an account?{" "}
              <Link to="/registration" className="text-blue-600 hover:underline">Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
