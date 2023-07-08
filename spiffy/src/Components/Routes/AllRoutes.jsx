import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Catalogue from "../catalogue";
import ChangePassword from "../ChangePassword";
import { Details } from "../Details";
import Home from "../Homepage";

import LoginPage from "../Login";
import SignUp from "../SignUp";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/catalouge" element={<Catalogue />} />
      <Route path="/:name" element={<Details/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/changePassword/:name" element={<ChangePassword/>} />
    </Routes>
  );
}