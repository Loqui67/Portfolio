import React, { useState } from "react";
import { Button, MenuItem, Menu, Typography } from "@mui/material";
import { i18n } from "@lingui/core";
import { languages } from "../../data/languages";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AnimatedArrow = styled(KeyboardArrowDownIcon)`
  transition: transform 0.3s ease-in-out;
  ${({ open }) => (open ? "transform: rotate(180deg);" : "")}
`;

const CustomMenuItem = styled(MenuItem)`
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

function LanguageSwitcher() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    i18n.activate(language);
    localStorage.setItem("language", language);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick} variant="text">
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          color={"white.main"}
          fontWeight={"bold"}
        >
          {languages.find((l) => l.code === language).abreviation}
        </Typography>
        <AnimatedArrow color="white" open={open} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        {languages.map((language) => (
          <CustomMenuItem
            key={language.name}
            onClick={() => {
              handleLanguageChange(language.code);
              handleClose();
            }}
          >
            <Typography variant="h6" color={"primary"}>
              {`${language.flag} ${language.name}`}
            </Typography>
          </CustomMenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default LanguageSwitcher;
