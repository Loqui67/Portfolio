import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground";

function Layout() {
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
      <ParticlesBackground />
      <Grid container direction={"column"} minHeight={"100vh"}>
        <Grid item>
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
          <Outlet />
        </Grid>
        <Grid item sx={{ mt: "auto", height: "10%" }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
