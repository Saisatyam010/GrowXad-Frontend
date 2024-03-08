import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <div style={{ marginBottom: "0px" }}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
