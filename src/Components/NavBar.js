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

  const pages = [
    {
      name: t`Home`,
      path: "/",
    },
    {
      name: t`Skills`,
      path: "/skills",
    },
    {
      name: t`Timeline`,
      path: "/timeline",
    },
    {
      name: t`About`,
      path: "/aboutme",
    },
    {
      name: t`Contact`,
      path: "/contactme",
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const VerticalBar = () => (
    <Typography variant="h5" sx={{ color: "primary.main" }}>
      |
    </Typography>
  );
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
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index}>
                  <Typography variant="h6" sx={{ color: "primary.main" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ width: { md: "90%", lg: "60%" } }}>
            <Grid
              container
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
              }}
            >
              {pages.map((page, index) => (
                <React.Fragment key={index}>
                  <Grid item>
                    <Link to={page.path}>
                      <Typography variant="h6" sx={{ color: "primary.main" }}>
                        {page.name}
                      </Typography>
                    </Link>
                  </Grid>
                  {index !== pages.length - 1 && <VerticalBar />}
                </React.Fragment>
              ))}
            </Grid>
          </Box>
          <LanguageSwitcher />
        </Toolbar>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
