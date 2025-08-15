import React from "react";


import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
    const flightsData = [
  {
    id: 1,
    airline: "AI",
    from: "DAC",
    to: "DEL",
    departure: "2025-08-09T21:00:00",
    arrival: "2025-08-09T23:20:00",
    duration: "PT28H",
    price: 707.56,
    currency: "EUR",
    featured: true,
    image: "https://i.ibb.co.com/9kPGWm4n/31202-1.jpg",
  },
  {
    id: 2,
    airline: "AI",
    from: "DAC",
    to: "DEL",
    departure: "2025-08-09T15:00:00",
    arrival: "2025-08-09T17:15:00",
    duration: "PT34H",
    price: 707.56,
    currency: "EUR",
    featured: false,
    image:""
  },
  {
    id: 3,
    airline: "RJ",
    from: "DAC",
    to: "DOH",
    departure: "2025-08-09T11:05:00",
    arrival: "2025-08-09T13:30:00",
    duration: "PT64H15M",
    price: 722.81,
    currency: "EUR",
    featured: true,
    image:"https://i.ibb.co.com/prQDJ3Ch/pexels-wolfgang-weiser-467045605.jpg"
  },
  {
    id: 4,
    airline: "WY",
    from: "DAC",
    to: "MCT",
    departure: "2025-08-09T16:05:00",
    arrival: "2025-08-09T18:55:00",
    duration: "PT26H55M",
    price: 771.54,
    currency: "EUR",
    featured: false,
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE"
  },
  {
    id: 5,
    airline: "SV",
    from: "DAC",
    to: "JED",
    departure: "2025-08-09T12:50:00",
    arrival: "2025-08-09T16:45:00",
    duration: "PT30H10M",
    price: 809.21,
    currency: "EUR",
    featured: true,
    image:"https://i.ibb.co.com/LDsn9mxM/pexels-lina-2253921-1.jpg"
  },
  {
    id: 6,
    airline: "EK",
    from: "DAC",
    to: "DXB",
    departure: "2025-08-10T08:00:00",
    arrival: "2025-08-10T11:20:00",
    duration: "PT5H20M",
    price: 690.0,
    currency: "EUR",
    featured: false,
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE"
  },
  {
    id: 7,
    airline: "QR",
    from: "DAC",
    to: "DOH",
    departure: "2025-08-10T14:30:00",
    arrival: "2025-08-10T17:45:00",
    duration: "PT5H15M",
    price: 715.99,
    currency: "EUR",
    featured: false,
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE"
  },
  {
    id: 8,
    airline: "TG",
    from: "DAC",
    to: "BKK",
    departure: "2025-08-11T10:00:00",
    arrival: "2025-08-11T14:30:00",
    duration: "PT4H30M",
    price: 655.45,
    currency: "EUR",
    featured:true,
    image:"https://i.ibb.co.com/scdZkG7/pexels-punttim-175656-1.jpg"
  },
  {
    id: 9,
    airline: "MH",
    from: "DAC",
    to: "KUL",
    departure: "2025-08-11T20:15:00",
    arrival: "2025-08-12T02:45:00",
    duration: "PT6H30M",
    price: 642.75,
    currency: "EUR",
    featured: false,
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE"
  },
  {
    id: 10,
    airline: "CX",
    from: "DAC",
    to: "HKG",
    departure: "2025-08-12T06:50:00",
    arrival: "2025-08-12T13:15:00",
    duration: "PT6H25M",
    price: 789.99,
    currency: "EUR",
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE",

  },
   {
    id: 10,
    airline: "CX",
    from: "DAC",
    to: "HKG",
    departure: "2025-08-12T06:50:00",
    arrival: "2025-08-12T13:15:00",
    duration: "PT6H25M",
    price: 789.99,
    currency: "EUR",
    image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fairline%2F&psig=AOvVaw0U0u3MlaFl6nRS6ZmpBR1h&ust=1754754798955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLDBv5fJ-44DFQAAAAAdAAAAABAE",

  },
]
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#e17100] mb-8">
        Featured Flights
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {flightsData
          .filter((flight) => flight.featured)
          .map((flight) => (
            <FeatureCard
              key={flight.id}
              {...flight}
             flight={flightsData}
            />
          ))}
      </div>
    </section>
  );
};

export default FeatureSection;