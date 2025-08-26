import { useForm } from "react-hook-form";

const OtherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Other Donation Submitted!", data);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4  font-primary bg-amber-300">Donate Other Items</h2>

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

        {/* Item Name */}
        <div>
          <label className="block text-gray-700 font-medium">Item Name</label>
          <input
            type="text"
            {...register("itemName", { required: "Item name is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter the name of the item"
          />
          {errors.itemName && <p className="text-red-500 text-sm">{errors.itemName.message}</p>}
        </div>

        {/* Item Description */}
        <div>
          <label className="block text-gray-700 font-medium">Item Description</label>
          <textarea
            {...register("itemDescription", { required: "Please provide a description of the item" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Describe the item (e.g., type, size, color, brand, condition, etc.)"
          />
          {errors.itemDescription && <p className="text-red-500 text-sm">{errors.itemDescription.message}</p>}
        </div>

        {/* Item Condition */}
        <div>
          <label className="block text-gray-700 font-medium">Item Condition</label>
          <select
            {...register("itemCondition", { required: "Please specify the item condition" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="new">New</option>
            <option value="gently_used">Gently Used</option>
            <option value="used">Used (Good Condition)</option>
          </select>
          {errors.itemCondition && <p className="text-red-500 text-sm">{errors.itemCondition.message}</p>}
        </div>

        {/* Special Instructions */}
        <div>
          <label className="block text-gray-700 font-medium">Special Instructions (Optional)</label>
          <textarea
            {...register("instructions")}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Any additional details about the item or pickup instructions"
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

export default OtherForm;
