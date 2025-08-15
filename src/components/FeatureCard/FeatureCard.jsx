import React from "react";
import { Clock, DollarSign, PlaneTakeoff, PlaneLanding } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({
  airline,
  from,
  to,
  departure,
  arrival,
  duration,
  price,
  currency,
  featured,
  onViewDetails,
  image,flight
}) => {
  
  const formatTime = (iso) =>
    new Date(iso).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
const navigate=useNavigate()
  return (
    <div className="relative rounded-2xl bg-white dark:bg-[#1f1f1f] shadow-sm hover:shadow-lg transition-all overflow-hidden border dark:border-gray-800">
      
      <div className="relative h-40 w-full">
        <img
          src={image}
          alt={`${airline} flight`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
            Featured
          </span>
        )}
      </div>


      <div className="p-5 space-y-3">
       
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {airline} Airlines
        </h3>

       
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 gap-2">
          <PlaneTakeoff className="w-4 h-4" /> {from}
          <span className="mx-1">→</span>
          <PlaneLanding className="w-4 h-4" /> {to}
        </div>

        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>Departure: {formatTime(departure)}</p>
          <p>Arrival: {formatTime(arrival)}</p>
        </div>

        
        <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {duration.replace("PT", "").toLowerCase()}
          </span>
          <p className="text-amber-600 font-semibold flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            {price} {currency}
          </p>
        </div>

      
        <div className="pt-3">
          <button
            onClick={() => navigate("/flight-details", { state: { flight } })}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-md transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;