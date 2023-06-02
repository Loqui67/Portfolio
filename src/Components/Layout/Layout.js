import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";

function Layout({ children }) {
  const ref = React.useRef(null);
  return (
    <div
      style={{
        overflowX: "hidden",
        overflowY: "auto",
        height: ref.current ? ref.current.clientHeight : "100vh",
      }}
      ref={ref}
    >
      <Grid container direction={"column"} minHeight={"100vh"}>
        <Grid item sx={{ width: "100%" }}>
          <NavBar />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            width: "100%",
          }}
        >
          {children}
        </Grid>
        <Grid item sx={{ mt: "auto", height: "10%" }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
