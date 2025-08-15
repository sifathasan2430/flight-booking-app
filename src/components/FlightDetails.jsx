import { useLocation, useNavigate } from "react-router-dom";

export default function FlightDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state;

  if (!flight) 
    return <p className="text-center mt-10 text-red-500">No flight data available.</p>;

  const handleBookNow = () => {
    // Navigate to booking page with flight data
    navigate("/bookingform", { state: flight });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Flight Details</h1>

      {/* General Info Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">General Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>ID:</strong> {flight.id}</p>
          <p><strong>Airline:</strong> {flight.validatingAirlineCodes.join(", ")}</p>
          <p><strong>One Way:</strong> {flight.oneWay ? "Yes" : "No"}</p>
          <p><strong>Seats Left:</strong> {flight.numberOfBookableSeats}</p>
          <p><strong>Last Ticketing Date:</strong> {flight.lastTicketingDate}</p>
        </div>
      </div>

      {/* Price Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Price Details</h2>
        <div className="space-y-2">
          <p><strong>Base Price:</strong> {flight.price.base} {flight.price.currency}</p>
          <p><strong>Total Price:</strong> {flight.price.total} {flight.price.currency}</p>
          <p><strong>Grand Total:</strong> {flight.price.grandTotal} {flight.price.currency}</p>
        </div>
      </div>

      {/* Itineraries Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Itineraries</h2>
        {flight.itineraries.map((itinerary, i) => (
          <div key={i} className="border-t pt-3 mt-3">
            <p className="font-medium"><strong>Duration:</strong> {itinerary.duration}</p>
            {itinerary.segments.map((seg, idx) => (
              <div key={idx} className="pl-4 border-l mt-2">
                <p><strong>From:</strong> {seg.departure.iataCode} ({seg.departure.at})</p>
                <p><strong>To:</strong> {seg.arrival.iataCode} ({seg.arrival.at})</p>
                <p><strong>Carrier:</strong> {seg.carrierCode}</p>
                <p><strong>Flight Number:</strong> {seg.number}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Traveler Pricing Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Traveler Pricing</h2>
        {flight.travelerPricings.map((traveler, i) => (
          <div key={i} className="border-t pt-3 mt-3">
            <p><strong>Traveler Type:</strong> {traveler.travelerType}</p>
            <p><strong>Fare Basis:</strong> {traveler.fareDetailsBySegment[0].fareBasis}</p>
            <p><strong>Class:</strong> {traveler.fareDetailsBySegment[0].cabin}</p>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleBookNow}
          className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg shadow  transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
