import React, { useState } from "react";
import { Button, MenuItem, Menu, Typography } from "@mui/material";
import { i18n } from "@lingui/core";
import { languages } from "../data/languages";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {languages.find((l) => l.code === language).abreviation}
        </Typography>

        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.name}
            onClick={() => {
              handleLanguageChange(language.code);
              handleClose();
            }}
          >
            {`${language.flag} ${language.name}`}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}

export default LanguageSwitcher;
