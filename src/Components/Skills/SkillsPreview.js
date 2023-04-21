import {
  Box,
  Divider,
  List,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SkillsPreview() {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "white.main",
          opacity: "0.8",
          boxShadow: 1,
          borderRadius: "1rem",
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            Skills
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            fontWeight={"bold"}
            color={"white.main"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            width={"100%"}
          >
            <Box width={"100%"}>
              <Typography
                variant="h6"
                color={"primary.main"}
                textAlign={"center"}
              >
                Soft skills
              </Typography>

              <Divider flexItem />
              <Box>
                <List>
                  <ListItemButton component={Link} to={"/a"}>
                    <Typography variant="body1" color={"primary.main"}>
                      a
                    </Typography>
                  </ListItemButton>
                </List>
              </Box>
            </Box>

            <Divider orientation="vertical" flexItem />

            <Box width={"100%"}>
              <Typography
                variant="h6"
                color={"primary.main"}
                textAlign={"center"}
              >
                Hard skills
              </Typography>
              <Divider flexItem />
              <Box>
                <List>
                  <ListItemButton component={Link} to={"/a"}>
                    <Typography variant="body1" color={"primary.main"}>
                      a
                    </Typography>
                  </ListItemButton>
                </List>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </React.Fragment>
  );
}

export default SkillsPreview;
