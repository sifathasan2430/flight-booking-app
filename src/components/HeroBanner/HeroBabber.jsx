import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getFlightOffers } from "../../api/Flightoffer";

const HeroBanner = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const searchOffers = async (data) => {
    const { origin, destination, departureDate } = data;
    const response = await getFlightOffers(origin, destination, departureDate, 1);
    navigate("/flights", { state: { flights: response.data || [] } });
  };

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="relative md:h-[75vh] w-full py-4  overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
            alt="Travel Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container px-4 text-center text-white space-y-5 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Find Your <span className="text-[#e17100]">Perfect Flight</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              Search and book flights to your dream destinations with ease and the best deals.
            </p>

            <form onSubmit={handleSubmit(searchOffers)} className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <input
                {...register("origin")}
                type="text"
                placeholder="Origin"
                className="px-3 py-2 rounded-md text-white focus:outline-none"
              />
              <input
                {...register("destination")}
                type="text"
                placeholder="Destination"
                className="px-3 py-2 rounded-md text-white focus:outline-none"
              />
              <input
                {...register("departureDate")}
                type="date"
                className="px-3 py-2 rounded-md text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#e17100] hover:bg-[#cc6300] text-white font-medium px-5 py-2 rounded-md transition"
              >
                Search Flights
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;