import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";


const Layout = ({ children }) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div >{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
