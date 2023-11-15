import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/our-shop/:catagory",
        element: <OurShop></OurShop>,
      },
    ],
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path: '/signup',
    element:<SignUp></SignUp>
  }
]);

export default Router;
