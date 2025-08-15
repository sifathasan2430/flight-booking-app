import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import OfferCard from '../components/FeatureCard/OfferCard';
import FlightFilter from '../components/flightfilters/FlightFilter';
import { getFlightOffers } from '../api/Flightoffer';
import { Loader2 } from 'lucide-react';

const FlightsPage = () => {
  const location = useLocation();
  const [flights, setFlights] = useState(location.state?.flights || []);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (data) => {
    setLoading(true);
    const { origin, destination, departureDate } = data;
    const response = await getFlightOffers(origin, destination, departureDate, 1);
    setFlights(response.data || []);
    setLoading(false);
  };
console.log(flights)
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-6 bg-gray-50 min-h-screen">
      <aside className="w-full md:w-1/4 md:sticky top-6 h-auto md:h-screen">
        <FlightFilter onSearch={handleSearch} />
      </aside>
      <main className="w-full md:w-3/4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">Available Flights</h2>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader2 className="animate-spin h-12 w-12 md:h-16 md:w-16 text-[#ff9a68]" />
          </div>
        ) : (
          <div className="space-y-6">
            {flights.length > 0 ? (
              flights.map((flight, idx) => <OfferCard key={idx} flight={flight} />)
            ) : (
              <div className="text-center py-12 md:py-16">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">No Flights Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default FlightsPage;