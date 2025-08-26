import { useForm } from "react-hook-form";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Money Donation Submitted!", data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 bg-amber-300">Donate Money</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium">Donation Amount (₹)</label>
          <input
            type="number"
            {...register("amount", { 
              required: "Donation amount is required",
              min: { value: 10, message: "Minimum donation is ₹10" }
            })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter amount"
          />
          {errors.amount && <p className="text-red-500 text-sm">{errors.amount.message}</p>}
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-gray-700 font-medium">Payment Method</label>
          <select
            {...register("paymentMethod", { required: "Please select a payment method" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="">Select an option</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netBanking">Net Banking</option>
          </select>
          {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 rounded-md bg-primary text-gray-900 font-medium hover:bg-third transition"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
