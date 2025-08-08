const API_KEY = "m47CUtbZKupLvnZipD8HxDmlQIe0cBEH";
const API_SECRET = "d8cwZcmaGYohEMer";
const TOKEN_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";
const FLIGHTS_URL = "https://test.api.amadeus.com/v2/shopping/flight-offers";

let accessToken = null;

export async function getAccessToken() {
  if (accessToken) return accessToken;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: API_KEY,
      client_secret: API_SECRET,
    }),
  });
  const data = await res.json();
  accessToken = data.access_token;
  return accessToken;
}

export async function searchFlights(filters) {
  const token = await getAccessToken();
  const params = new URLSearchParams(filters).toString();

  const res = await fetch(`${FLIGHTS_URL}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Failed to fetch flights");
  console.log("Flight search response:", res);
  return res.json();
}