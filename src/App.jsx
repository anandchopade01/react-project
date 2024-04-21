import './App.css'
import React from "react";
import { createRoot } from "react-dom/client";
import About from './About';
import Login from './Login';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home/>
      </div>
    ),
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path:"/login",
    element: <Login/>
  }
  
]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default App
