import React from "react";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

function WelcomePage() {
  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "primary.main",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "white.main",
            opacity: "0.8",
            boxShadow: 1,
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <Typography variant="h1">{t`Hello !`}</Typography>
          <Typography
            variant="h2"
            gutterBottom
          >{t`Welcome to my portfolio !`}</Typography>
          <Box
            sx={{
              backgroundColor: "secondary.main",
              boxShadow: 1,
              borderRadius: "1rem",
              padding: "1rem",
              width: "fit-content",
            }}
          >
            <Button>
              <Link to="/timeline" className="expand-button">
                <Stack
                  direction="row"
                  spacing={1}
                  fontWeight={"bold"}
                  color={"white.main"}
                  alignItems={"center"}
                >
                  <Typography
                    variant="h6"
                    flexGrow={1}
                  >{t`Let's go !`}</Typography>
                  <ArrowForward />
                </Stack>
              </Link>
            </Button>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default WelcomePage;
