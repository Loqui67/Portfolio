import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
import CustomBox from "../Custom/CustomBox";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
import { t } from "@lingui/macro";
import styled from "styled-components";
import shadows from "@mui/material/styles/shadows";

const DiagonalDiv = styled(Box)`
  width: 100%;
  transform: skewY(-4deg);
  background: linear-gradient(
    135deg,
    rgba(73, 160, 157, 0.9),
    rgba(147, 112, 219, 0.9)
  );
  border-block: 5px solid #000000;
  color: #ffffff;
  height: 65vh;
`;

function Home() {
  return (
    <React.Fragment>
      <DiagonalDiv>
        <CustomBox centered width={"100%"}>
          <Stack
            direction="column"
            alignItems="center"
            sx={{
              marginBlock: "2vh",
            }}
          >
            <Typography
              fontSize={{ xs: 100, md: 150, lg: 200, xl: 250 }}
              fontWeight={"bold"}
              fontStyle={"italic"}
              lineHeight={1}
              mb={3}
            >
              Loïc Walter
            </Typography>
            <Typography
              fontSize={{ xs: 40, lg: 50, xl: 60 }}
              fontWeight={"bold"}
              fontStyle={"italic"}
              lineHeight={1}
              mb={5}
            >
              {t`Bienvenue sur mon portfolio !`}
            </Typography>
            <Button
              component={Link}
              to="/about"
              className="expand-button"
              sx={{
                boxShadow: shadows[5],
                borderRadius: "1rem",
                padding: "1rem",
                width: "250px",
                color: "white.main",
                fontWeight: "bold",
                transition: "width 0.5s",
                "&:hover": {
                  backgroundColor: "secondary.dark",
                  width: "300px",
                },
              }}
            >
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
            </Button>
          </Stack>
        </CustomBox>
      </DiagonalDiv>
    </React.Fragment>
  );
}

export default Home;
