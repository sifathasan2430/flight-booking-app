import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import FlightsPage from "../Pages/FlightPage";

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
       }]
 }]);
export default router;