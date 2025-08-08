import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBabber';
import Container from '../components/Container/Container';
import PopularCards from '../components/PopularsCards/PopularCard';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import FeatureSection from '../components/FeatureCard/FeatureSection';
import PaymentSlider from '../components/PaymentSlider/PaymentSlider';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <div className="py-16 md:py-24">
                <Container>
                    <div className="space-y-20 md:space-y-28">
                        <PopularCards />
                        <FeatureSection />
                        <TestimonialSection />
                        <PaymentSlider />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;