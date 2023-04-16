import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Box, IconButton, Typography } from "@mui/material";

function Footer() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "66px",
          backgroundColor: "primary.main",
          opacity: "0.8",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
            I'm still working on this website, so please be patient :)
          </Typography>
        </Box>
        <Box>
          <IconButton
            href="https://github.com/Loqui67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "secondary.main" }} />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/loicwalter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "secondary.main" }} />
          </IconButton>
          <IconButton
            href="mailto:loicwalter88@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon sx={{ color: "secondary.main" }} />
          </IconButton>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
            Loïc Walter
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
