import Container from "../Container/Container";
const destinationData = [
  {
    id: 1,
    category: "European Getaways",
    description: "Explore the charm of Europe's most beautiful cities.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 2,
    category: "Tropical Beaches",
    description: "Relax on sunny shores with crystal clear waters.",
    image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
    
  },
  {
    id: 3,
    category: "Mountain Escapes",
    description: "Breathtaking mountain destinations for nature lovers.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
];

const PopularCard = () => {
  return (
  <>
    
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#e17100] mb-16">
        Popular Destinations
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinationData.map((dest) => (
          <div
            key={dest.id}
            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            
            <img
              src={dest.image}
              alt={dest.category}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors duration-300" />

        
            <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
              <h3 className="text-lg sm:text-xl font-semibold">
                {dest.category}
              </h3>
              <p className="text-sm text-white/80 line-clamp-2">
                {dest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default PopularCard;
