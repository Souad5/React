import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Components/Router/Root";
import Error from "../Pages/ErrorPages/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BooksCard from "./BooksCard";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<Error></Error>,
      children:[
        {
            index:true,
            loader:()=>fetch('booksData.json'),
            path:'/',
            Component:Home
        },
        {
          path:"/about",
          Component:About,
          loader:()=>fetch('booksData.json'),
        },
        {
          path:'/booksCard/:id',
          Component:BooksCard,
          loader:()=>fetch('booksData.json'),

        }
      ]
    },
  ]);
  