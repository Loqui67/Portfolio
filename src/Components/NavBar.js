import React from "react";
import { Toolbar, Typography, Box } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "navBarBackground.main", opacity: "0.8" }}>
        <Toolbar>
          <Box
            sx={{
              marginLeft: "5rem",
              flexGrow: 1,
              display: "flex",
            }}
          >
            <Link to="/home" style={{ marginLeft: "10rem" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                sx={{ color: "primary.main" }}
              >
                {t`Home`}
              </Typography>
            </Link>
            <Link to="/skills" style={{ marginLeft: "10rem" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                sx={{ color: "primary.main" }}
              >{t`Skills`}</Typography>
            </Link>
            <Link to="/timeline" style={{ marginLeft: "10rem" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                sx={{ color: "primary.main" }}
              >{t`Timeline`}</Typography>
            </Link>
            <Link to="/contact" style={{ marginLeft: "10rem" }}>
              <Typography
                variant="h6"
                fontWeight={"bold"}
                sx={{ color: "primary.main" }}
              >{t`Contact`}</Typography>
            </Link>
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
