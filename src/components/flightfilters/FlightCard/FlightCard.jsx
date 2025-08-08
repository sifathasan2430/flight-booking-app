const  FlightCard=({ flight })=> {
  const segment = flight.itineraries[0].segments[0];
  const airline = segment.carrierCode;
  const departure = segment.departure;
  const arrival = segment.arrival;
  const price = flight.price.total;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* Top: Airline + Logo */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={`https://content.r9cdn.net/rimg/provider-logos/airlines/v/BG.png?crop=false&width=108&height=92&fallback=default3.png&_v=6fc13e71da6948c425f74eaa6ac55f97`}
          alt={airline}
          className="w-10 h-10 object-contain"
        />
        <h3 className="font-semibold text-lg">{airline}</h3>
      </div>

      {/* Route */}
      <div className="mb-3">
        <p className="text-sm text-gray-600">
          {departure.iataCode} → {arrival.iataCode}
        </p>
        <p className="font-medium text-gray-800">
          {new Date(departure.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} 
          {" "} - {" "}
          {new Date(arrival.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {/* Price */}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-orange-600">${price}</span>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
          View Deal
        </button>
      </div>
    </div>
  );
}
export default FlightCard;