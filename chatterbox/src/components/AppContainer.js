import React from "react";
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";


//Routing all the components and pages
export default function AppContainer() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

              
      </Routes>
    </HashRouter>
  );
}

 