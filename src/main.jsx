import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import Router from './router/index.jsx'
import { RouterProvider } from "react-router-dom";
import "./styles/main.css";


ReactDOM.createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
