import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FlightFilter = ({ onSearch }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Filter Flights</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSearch)} className="space-y-4">
          <div>
            <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
            <Input id="origin" {...register("origin")} placeholder="e.g., NYC" />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <Input id="destination" {...register("destination")} placeholder="e.g., LAX" />
          </div>
          <div>
            <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700">Departure Date</label>
            <Input id="departureDate" type="date" {...register("departureDate")} />
          </div>
          <Button type="submit" className="w-full bg-[#ff9a68] text-white hover:bg-[#ff7f4d]">Search</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FlightFilter;
