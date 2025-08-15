import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Plane } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OfferCard = ({ flight }) => {
  const { itineraries, price } = flight;
  const firstItinerary = itineraries[0];
  const firstSegment = firstItinerary.segments[0];
  const lastSegment = firstItinerary.segments[firstItinerary.segments.length - 1];

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
const navigate=useNavigate()
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden my-4">
      <div className="md:flex">
        <div className="md:w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co.com/9kPGWm4n/31202-1.jpg)` }}>
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Plane className="w-4 h-4" />
                <span>{firstSegment.carrierCode}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{firstSegment.departure.iataCode} to {lastSegment.arrival.iataCode}</h3>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-[#ff9a68]">${price.total}</div>
              <div className="text-xs text-gray-500">per person</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{firstItinerary.duration.slice(2).toLowerCase().replace('h', 'h ').replace('m', 'm')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{formatTime(firstSegment.departure.at)}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span>{formatTime(lastSegment.arrival.at)}</span>
            </div>
          </div>
          <div className="mt-6 text-right">
            <Button onClick={()=> navigate(`/flight-details/${flight.id}`,{state:flight})} className="bg-gradient-to-r from-[#ff9a68] to-[#ff7f4d] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
