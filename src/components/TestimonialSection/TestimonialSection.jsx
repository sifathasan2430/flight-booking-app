import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Container from "../Container/Container";

const testimonials = [
  {
    name: "John Doe",
    role: "Traveler",
    quote: "Booking my flights has never been easier! Excellent UI and super fast search.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Alice Smith",
    role: "Frequent Flyer",
    quote: "I found great offers and smooth user experience. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    name: "Mohammad Fahim",
    role: "Backpacker",
    quote: "Superb interface with great customer support. Loved the simplicity!",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Emily Carter",
    role: "Travel Blogger",
    quote: "Very intuitive and useful flight booking platform. Nice job!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="">
      
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-4 italic">“{testimonial.quote}”</p>
                  <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-md text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      
    </div>
  );
};

export default TestimonialSection;
