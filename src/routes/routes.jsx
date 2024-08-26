import React from "react";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import { Route } from "react-router-dom";

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default Routes;
