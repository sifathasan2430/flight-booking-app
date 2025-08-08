import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container mx-auto  py-4 px-4 md:px-8">
            {children}
        </div>
    );
};

export default Container;