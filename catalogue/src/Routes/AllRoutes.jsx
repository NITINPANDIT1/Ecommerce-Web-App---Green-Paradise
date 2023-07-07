import React from "react";
import { Routes, Route } from "react-router-dom";
import Catalogue from "../components/catalogue";
import { Details } from "../components/Details";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Catalogue />} />
      <Route path="/:name" element={<Details/>} />
    </Routes>
  );
}
