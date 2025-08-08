import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const FlightSearchForm = () => {
  return (
    <form className="w-full max-w-3xl bg-background p-4 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input placeholder="Origin (e.g. DAC)" />
      <Input placeholder="Destination (e.g. JFK)" />
      <Input type="date" />
      <Input type="number" placeholder="Passengers" min={1} />
      <Button type="submit" className="w-full md:col-span-4">
        Search Flights
      </Button>
    </form>
  );
};

export default FlightSearchForm;