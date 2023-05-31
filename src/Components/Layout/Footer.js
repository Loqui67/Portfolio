import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography, Grid, Toolbar, Stack } from "@mui/material";

function Footer() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          backgroundColor: "primary.main",
          opacity: "0.8",
          color: "secondary.main",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <React.Fragment>
                <IconButton
                  href="https://github.com/Loqui67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon color={"secondary"} />
                  <Typography variant="subtitle1" color={"secondary"} ml={1}>
                    Github
                  </Typography>
                </IconButton>
              </React.Fragment>
              <React.Fragment>
                <IconButton
                  href="https://www.linkedin.com/in/loicwalter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color={"secondary"} />
                  <Typography variant="subtitle1" color={"secondary"} ml={1}>
                    LinkedIn
                  </Typography>
                </IconButton>
              </React.Fragment>
              <React.Fragment>
                <IconButton
                  href="mailto:loicwalter88@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon color={"secondary"} />
                  <Typography variant="subtitle1" color={"secondary"} ml={1}>
                    Email
                  </Typography>
                </IconButton>
              </React.Fragment>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">© 2023 Loïc Walter</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

export default Footer;
