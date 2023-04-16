import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
