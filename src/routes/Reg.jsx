import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";

const Reg = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <div className="h-full flex justify-center items-center bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat px-6 py-10">
      <div className="w-full max-w-5xl bg-white/30 backdrop-blur-md shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 p-12 bg-gradient-to-r from-primary to-secondary text-gray-900">
          <h2 className="text-4xl font-bold text-center">Welcome to DonateDelight</h2>
          <p className="mt-6 text-lg text-center leading-relaxed">
            Join our mission to help those in need. Register now and start making a difference today.
          </p>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            <div className="flex justify-center mb-4">
              <FaUser className="text-5xl text-fourth" />
            </div>
            Registration
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("fullName", { required: "Full name is required" })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("emailAddress", { required: "Email Address is required" })}
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter Your Mobile Number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("mobileNumber", { required: "Mobile Number is required" })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Password *</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("password", { required: "Password is required" })}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Confirm Password *</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === password.current || "Passwords do not match",
                })}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#20b3b3] text-white font-semibold rounded-md shadow-md hover:bg-[#7fffd4] hover:text-black transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reg;
