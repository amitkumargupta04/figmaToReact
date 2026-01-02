import React from "react";
import Headers from "./Headers";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Applayouts() {
  return (
    <>
      <Headers />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Applayouts;
