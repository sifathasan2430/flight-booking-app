import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import FlightsPage from "../Pages/FlightPage";
import FlightDetails from "../components/FlightDetails";
import BookingForm from "../components/BookingForm/BookingForm";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component:Home
       },{
        path: "/flights",
        Component:FlightsPage
       },
       {
        path:"/flight-details/:id",
        Component:FlightDetails
       },
       {
        path:'/bookingform',
        Component:BookingForm
       }
      ]
 }]);
export default router;