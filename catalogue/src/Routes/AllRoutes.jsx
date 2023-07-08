import React from "react";
import { Routes, Route } from "react-router-dom";
import Catalogue from "../components/catalogue";
import { Details } from "../components/Details";
import Home from "../components/Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<Details/>} />
    </Routes>
  );
}
