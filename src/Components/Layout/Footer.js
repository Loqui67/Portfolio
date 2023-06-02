import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography, Grid, Toolbar, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import { styled } from "@mui/system";

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AnimatedIconButton = styled(IconButton)`
  &:hover {
    animation: ${bounceAnimation} 0.5s forwards;
  }
`;

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
                <AnimatedIconButton
                  href="https://github.com/Loqui67"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon color={"white"} />
                  <Typography variant="subtitle1" color={"white.main"} ml={1}>
                    Github
                  </Typography>
                </AnimatedIconButton>
              </React.Fragment>
              <React.Fragment>
                <AnimatedIconButton
                  href="https://www.linkedin.com/in/loicwalter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color={"white"} />
                  <Typography variant="subtitle1" color={"white.main"} ml={1}>
                    LinkedIn
                  </Typography>
                </AnimatedIconButton>
              </React.Fragment>
              <React.Fragment>
                <AnimatedIconButton
                  href="mailto:loicwalter88@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon color={"white"} />
                  <Typography variant="subtitle1" color={"white.main"} ml={1}>
                    Email
                  </Typography>
                </AnimatedIconButton>
              </React.Fragment>
            </Stack>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color={"white.main"}>
              © 2023 Loïc Walter
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

export default Footer;
