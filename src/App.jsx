import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./components/NotFound";
import RootLayout from "./layout/RootLayout";
import Reservation from "./pages/Reservation";
import About from "./pages/About";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="reservation" element={<Reservation/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
