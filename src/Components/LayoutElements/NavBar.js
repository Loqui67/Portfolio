import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";
import CustomBox from "../MuiCustomComponents/CustomBox";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pages = [
    {
      name: t`Home`,
      path: "/",
    },
    {
      name: t`About`,
      path: "/about",
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
      name: t`Contact`,
      path: "/contact",
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CustomBox
        borderBottom={"solid thin rgba(255, 255, 255, .1)"}
        backgroundColor={"rgba(255, 255, 255, .1)"}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomBox sx={{ display: { xs: "flex", md: "none" } }}>
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
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  component={Link}
                  to={page.path}
                  divider={index !== pages.length - 1}
                  key={index}
                >
                  <Typography variant="h6" color={"primary"}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </CustomBox>
          <CustomBox>
            <Grid
              container
              columnSpacing={{ md: 1, lg: 2, xl: 3 }}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
              ml={{ md: 1, lg: 2 }}
            >
              {pages.map((page, index) => (
                <React.Fragment key={index}>
                  <Grid item>
                    <Button
                      className="navButton"
                      component={Link}
                      to={page.path}
                      sx={{
                        textTransform: "none",
                      }}
                    >
                      <Typography variant="h6" color={"primary"}>
                        {page.name}
                      </Typography>
                    </Button>
                  </Grid>
                  {index !== pages.length - 1 && (
                    <Grid item>
                      <Divider
                        orientation="vertical"
                        sx={{
                          backgroundColor: "primary.main",
                          opacity: "0.5",
                          height: "40px",
                        }}
                        flexItem
                      />
                    </Grid>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </CustomBox>
          <LanguageSwitcher />
        </Toolbar>
      </CustomBox>
    </React.Fragment>
  );
}

export default NavBar;
