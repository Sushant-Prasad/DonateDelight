import { useForm } from "react-hook-form";

const ClothesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Clothes Donation Submitted!", data);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 bg-amber-300 font-primary">Donate Clothes</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Pickup Address */}
        <div>
          <label className="block text-gray-700 font-medium">Pickup Address</label>
          <textarea
            {...register("pickupAddress", { required: "Pickup address is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter the address for pickup"
          />
          {errors.pickupAddress && <p className="text-red-500 text-sm">{errors.pickupAddress.message}</p>}
        </div>

        {/* Clothing Type */}
        <div>
          <label className="block text-gray-700 font-medium">Clothing Type</label>
          <select
            {...register("clothingType", { required: "Please select clothing type" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="men">Men's Clothing</option>
            <option value="women">Women's Clothing</option>
            <option value="children">Children's Clothing</option>
            <option value="mixed">Mixed Clothing</option>
          </select>
          {errors.clothingType && <p className="text-red-500 text-sm">{errors.clothingType.message}</p>}
        </div>

        {/* Clothing Condition */}
        <div>
          <label className="block text-gray-700 font-medium ">Clothing Condition</label>
          <select
            {...register("clothingCondition", { required: "Please specify the clothing condition" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="new">New</option>
            <option value="gently_used">Gently Used</option>
            <option value="used">Used (Good Condition)</option>
          </select>
          {errors.clothingCondition && <p className="text-red-500 text-sm">{errors.clothingCondition.message}</p>}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input
            type="number"
            {...register("quantity", { required: "Please enter quantity" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Number of items"
            min="1"
          />
          {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-gray-700 font-medium">Special Instructions (Optional)</label>
          <textarea
            {...register("instructions")}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Any additional details (e.g., sizes, seasonal clothes, etc.)"
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

export default ClothesForm;
