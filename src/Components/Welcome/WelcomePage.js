import React from "react";
import { t } from "@lingui/macro";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import CustomBox from "../MuiCustomComponents/CustomBox";

function WelcomePage() {
  return (
    <React.Fragment>
      <CustomBox whiteBox responsive centered>
        <Stack>
          <Typography variant="h1">{t`Hello !`}</Typography>
          <Typography
            variant="h2"
            gutterBottom
          >{t`Welcome to my portfolio !`}</Typography>
          <CustomBox
            sx={{
              backgroundColor: "secondary.main",
              boxShadow: 1,
              borderRadius: "1rem",
              padding: "1rem",
              width: "fit-content",
            }}
          >
            <Button>
              <Link to="/about" className="expand-button">
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
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default WelcomePage;
