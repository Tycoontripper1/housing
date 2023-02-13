import React, { useState } from "react";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context";

export const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </ContextProvider>
  );
};
