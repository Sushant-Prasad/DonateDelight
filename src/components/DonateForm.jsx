import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import { useState } from "react";

const DonateForm = ({ onDonationSubmit }) => {
  const NGOs = useSelector((state) => state.NGOs);
  const ngoOptions = NGOs.map((ngo) => ({
    value: ngo.id,
    label: ngo.NGOName,
  }));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    onDonationSubmit(data.donationType);
  };

  const [selectedDonationType, setSelectedDonationType] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 font-primary bg-amber-300">
        Make a Donation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Donation Type */}
        <div>
          <label className="block text-gray-700 font-medium">Donation Type</label>
          <select
            {...register("donationType", { required: "Please select a donation type" })}
            onChange={(e) => setSelectedDonationType(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="money">Money</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="other">Other</option>
          </select>
          {errors.donationType && <p className="text-red-500 text-sm">{errors.donationType.message}</p>}
        </div>

        {/* Searchable NGO Selection (Compact Dropdown) */}
        <div>
          <label className="block text-gray-700 font-medium">Select an NGO</label>
          <Controller
            name="ngo"
            control={control}
            rules={{ required: "Please select an NGO" }}
            render={({ field }) => (
              <Select
                {...field}
                options={ngoOptions}
                isSearchable
                placeholder="Search & Select an NGO"
                className="w-full"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "32px", 
                  }),
                  menu: (provided) => ({
                    ...provided,
                    maxHeight: "150px", 
                    overflowY: "auto", 
                  }),
                  menuList: (provided) => ({
                    ...provided,
                    maxHeight: "150px", 
                    overflowY: "auto", 
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "2px 8px",
                  }),
                }}
              />
            )}
          />
          {errors.ngo && <p className="text-red-500 text-sm">{errors.ngo.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 rounded-md bg-primary text-gray-950 font-medium hover:bg-opacity-90 transition"
        >
          Proceed To Donate
        </button>
      </form>
    </div>
  );
};

export default DonateForm;
