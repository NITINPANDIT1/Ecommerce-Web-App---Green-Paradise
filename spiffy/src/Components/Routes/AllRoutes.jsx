import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Catalogue from "../catalogue";
import { Details } from "../Details";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/catalouge" element={<Catalogue />} />
      <Route path="/:name" element={<Details/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}