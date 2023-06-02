import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";
import { Link, useNavigate } from "react-router-dom";
import CustomBox from "../Custom/CustomBox";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(pages[newValue].path);
  };

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
        width={"100%"}
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
              color="white"
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
          <CustomBox sx={{ display: { xs: "none", md: "flex" } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { background: "#ffffff" } }}
            >
              {pages.map((page, index) => (
                <Tab
                  key={index}
                  label={
                    <Typography
                      variant="h6"
                      color={"white.main"}
                      textTransform={"none"}
                    >
                      {page.name}
                    </Typography>
                  }
                />
              ))}
            </Tabs>
          </CustomBox>
          <LanguageSwitcher />
        </Toolbar>
      </CustomBox>
    </React.Fragment>
  );
}

export default NavBar;
