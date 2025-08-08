import React from 'react';
import Container from '../Container/Container';
import Logo from '../Navbar/logo/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t ">
      
      <Container>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div className=" md:col-span-1">
            <Logo />
            <p className="text-muted-foreground mt-4">Your one-stop shop for the best flight deals. Fly more, spend less.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-[#ff9a68]">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest deals.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit" style={{ backgroundColor: '#ff9a68', color: 'white' }}>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FlightFinder. All rights reserved.</p>
        </div>
      </Container>
    
    </footer>
  );
};

export default Footer;