import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const  BookingForm=()=> {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state; // flight data from FlightDetails page

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    // Navigate to confirmation page or send to backend
    navigate("/confirmation", { state: { flight, booking: data } });
  };

  if (!flight) return <p className="text-center mt-10 text-red-500">No flight selected.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-md space-y-6">
        
        {/* Traveler Info */}
        <h2 className="text-xl font-semibold mb-4">Traveler Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              {...register("fullName", { required: "Name is required" })}
              className="w-full border p-2 rounded-lg"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } 
              })}
              className="w-full border p-2 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className="w-full border p-2 rounded-lg"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Passport Number</label>
            <input
              {...register("passportNumber", { required: "Passport number is required" })}
              className="w-full border p-2 rounded-lg"
            />
            {errors.passportNumber && <p className="text-red-500 text-sm">{errors.passportNumber.message}</p>}
          </div>
        </div>

        {/* Flight Info (readonly) */}
        <h2 className="text-xl font-semibold mb-4">Flight Info</h2>
        <div className="space-y-2 bg-gray-100 p-4 rounded-lg">
          <p><strong>Flight ID:</strong> {flight.id}</p>
          <p><strong>Airline:</strong> {flight.validatingAirlineCodes.join(", ")}</p>
          <p><strong>Seats Left:</strong> {flight.numberOfBookableSeats}</p>
          <p><strong>Total Price:</strong> {flight.price.total} {flight.price.currency}</p>
        </div>

        {/* Payment Info */}
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Card Number</label>
            <input
              {...register("cardNumber", { required: "Card number is required" })}
              className="w-full border p-2 rounded-lg"
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Expiry Date</label>
            <input
              {...register("expiry", { required: "Expiry date is required" })}
              className="w-full border p-2 rounded-lg"
              placeholder="MM/YY"
            />
            {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">CVV</label>
            <input
              {...register("cvv", { required: "CVV is required" })}
              className="w-full border p-2 rounded-lg"
              placeholder="123"
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow  transition duration-300"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}
export default BookingForm