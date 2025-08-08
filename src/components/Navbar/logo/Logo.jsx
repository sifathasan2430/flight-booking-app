import React from 'react';

const Logo = () => {
    return (
         <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="h-8 w-8 bg-orange-600" />
          <h1 className="text-lg font-semibold italic" style={{ color: '#ff9a68' }}>FlightFinder</h1>
        </div>
    );
};

export default Logo;