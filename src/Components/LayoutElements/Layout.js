import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Grid } from "@mui/material";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Grid container direction={"column"} minHeight={"100vh"}>
        <Grid item sx={{ minWidth: "100%" }}>
          <NavBar />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBlock: "5vh",
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
    </React.Fragment>
  );
}

export default Layout;
