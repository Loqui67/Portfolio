import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Box,
  Grid,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "navBarBackground.main", opacity: "0.8" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              keepMounted
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem component={Link} to="/">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >
                  {t`Home`}
                </Typography>
              </MenuItem>
              <MenuItem component={Link} to="/skills">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Skills`}</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/timeline">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Timeline`}</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/contact">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Contact`}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Grid item>
              <Link to="/">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >
                  {t`Home`}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/skills">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Skills`}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/timeline">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Timeline`}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact">
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  sx={{ color: "primary.main" }}
                >{t`Contact`}</Typography>
              </Link>
            </Grid>
          </Grid>
          <LanguageSwitcher />
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
