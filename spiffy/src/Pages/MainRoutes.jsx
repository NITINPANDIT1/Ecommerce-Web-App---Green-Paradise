import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import ChangePassword from "./ChangePassword";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/changePassword/:name" element={<ChangePassword/>} />
      {/* <Route path="*" element={<SignUp />} /> */}

    </Routes>
  );
};

export default MainRoutes;
