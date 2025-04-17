import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Components/Router/Root";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/Home/Home";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            Root:'/',
            Component:Home
        }
      ]
    },
  ]);
  