import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Applayouts from "./layouts/Applayouts";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Layout Route */}
        <Route element={<Applayouts />}>
          <Route path="/home" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
