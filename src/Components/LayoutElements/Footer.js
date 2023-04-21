import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography, Grid, Toolbar } from "@mui/material";
import { t } from "@lingui/macro";

function Footer() {
  return (
    <React.Fragment>
      <Toolbar sx={{ backgroundColor: "primary.main", opacity: "0.8" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item>
            <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
              {t`I'm still working on this website, so please be patient :)`}
            </Typography>
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
              © 2023 Loïc Walter
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

export default Footer;
