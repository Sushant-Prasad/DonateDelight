import { useForm } from "react-hook-form";

const FoodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Food Donation Submitted!", data);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 font-primary bg-amber-300">Donate Food</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Pickup Address */}
        <div>
          <label className="block text-gray-700 font-medium">Pickup Address</label>
          <textarea
            {...register("pickupAddress", { required: "Pickup address is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter the address for food pickup"
          />
          {errors.pickupAddress && <p className="text-red-500 text-sm">{errors.pickupAddress.message}</p>}
        </div>

        {/* Food Condition */}
        <div>
          <label className="block text-gray-700 font-medium">Food Condition</label>
          <select
            {...register("foodCondition", { required: "Please select food condition" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="fresh">Fresh</option>
            <option value="leftover">Leftover (Safe to Eat)</option>
            <option value="packaged">Packaged</option>
          </select>
          {errors.foodCondition && <p className="text-red-500 text-sm">{errors.foodCondition.message}</p>}
        </div>

        {/* Food Description */}
        <div>
          <label className="block text-gray-700 font-medium">Food Description</label>
          <textarea
            {...register("foodDescription", { required: "Please provide a food description" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Describe the food (e.g., 'Rice & curry' or 'Packaged snacks')"
          />
          {errors.foodDescription && <p className="text-red-500 text-sm">{errors.foodDescription.message}</p>}
        </div>

        {/* Expiry Time */}
        <div>
          <label className="block text-gray-700 font-medium">Best Before (Time)</label>
          <input
            type="datetime-local"
            {...register("expiryTime", { required: "Please provide an expiry time" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.expiryTime && <p className="text-red-500 text-sm">{errors.expiryTime.message}</p>}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-gray-700 font-medium">Special Instructions (Optional)</label>
          <textarea
            {...register("instructions")}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Any additional details (e.g., vegetarian, non-spicy, etc.)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 rounded-md bg-primary text-gray-900 font-medium hover:bg-third transition"
        >
          Submit 
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
