import React, { useState } from "react";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Context";
import { Contact } from "./pages/Contacts/Contact";
import { Landlords } from "./pages/landlords/Landlords";
import { Tenants } from "./pages/tenants/Tenants";

export const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/landlords" element={<Landlords />}></Route>
        <Route exact path="/tenants" element={<Tenants />}></Route>
        <Route exact path="/contacts" element={<Contact />}></Route>
      </Routes>
    </ContextProvider>
  );
};
