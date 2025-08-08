import axios from "axios";


const getAccessToken = async () => {
  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "m47CUtbZKupLvnZipD8HxDmlQIe0cBEH",       // Replace with your Amadeus API key
        client_secret: "d8cwZcmaGYohEMer" // Replace with your Amadeus API secret
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response?.data || error.message);
    throw error;
  }
};

// Step 2: Get Flight Offers
export const getFlightOffers = async (origin, destination, departureDate, adults) => {
  try {
    const token = await getAccessToken();
    const response = await axios.get(
      "https://test.api.amadeus.com/v2/shopping/flight-offers",
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          originLocationCode: origin,       
          destinationLocationCode: destination, 
          departureDate: departureDate,   
          adults: adults                   
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching flight offers:", error.response?.data || error.message);
    throw error;
  }
};
