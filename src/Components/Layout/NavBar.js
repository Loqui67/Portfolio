import React, { useEffect, useState, useMemo } from "react";
import {
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@lingui/macro";
import { Link, useNavigate } from "react-router-dom";
import CustomBox from "../Custom/CustomBox";
import { KeyboardArrowRight } from "@mui/icons-material";
import { styled } from "@mui/system";

const CustomMenuItem = styled(MenuItem)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;
function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const pages = useMemo(
    () => [
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
    ],
    []
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(pages[newValue].path);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const page = pages.findIndex((page) => page.path === path);
    setValue(page);
  }, [pages]);

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
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
            >
              {pages.map((page, index) => (
                <CustomMenuItem component={Link} to={page.path} key={index}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <Typography variant="h6" color={"primary"}>
                      {page.name}
                    </Typography>
                    <KeyboardArrowRight color="primary" />
                  </Stack>
                </CustomMenuItem>
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
