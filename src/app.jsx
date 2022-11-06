import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./components/profile/index";
import { Block } from "./components/profile/style";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";

function App() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Block>
  );
}

export default App;
