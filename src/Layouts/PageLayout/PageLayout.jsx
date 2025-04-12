import React from "react";
import { Footer, Navbar } from "../../components";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
