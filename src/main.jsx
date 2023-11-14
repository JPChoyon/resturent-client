import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import { HelmetProvider } from "react-helmet-async";
import Context from './Context/Context.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HelmetProvider>
    </Context>
  </React.StrictMode>
);
