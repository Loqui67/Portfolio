import { List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";
import CustomBox from "../MuiCustomComponents/CustomBox";

function AboutMe() {
  return (
    <React.Fragment>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        width={"100%"}
        height={"100%"}
        spacing={2}
      >
        <CustomBox whiteBox centered responsive>
          <Stack direction={"column"} spacing={2}>
            <Typography variant={"h4"} gutterBottom>
              My projects
            </Typography>
            <List>
              <ListItem>
                <Typography variant={"h6"} gutterBottom>
                  Project 1
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant={"h6"} gutterBottom>
                  Project 2
                </Typography>
              </ListItem>
            </List>
          </Stack>
        </CustomBox>
        <CustomBox whiteBox centered responsive>
          <Stack direction={"column"} spacing={2}>
            <Typography variant={"h4"} gutterBottom>
              My description
            </Typography>
            <Typography variant={"h6"} gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl,
              nec aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              aliquam tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl
              nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed
              tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam nisl,
              nec aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget
              aliquam tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl
              sit amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl
              nisl aliquam nisl, nec aliquam nisl.
            </Typography>
          </Stack>
        </CustomBox>
        <CustomBox whiteBox centered responsive>
          <Stack direction={"column"} spacing={2}>
            <Typography variant={"h4"} gutterBottom>
              My hobbies
            </Typography>
            <List>
              <ListItem>
                <Typography variant={"h6"} gutterBottom>
                  Hobby 1
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant={"h6"} gutterBottom>
                  Hobby 2
                </Typography>
              </ListItem>
            </List>
          </Stack>
        </CustomBox>
      </Stack>
    </React.Fragment>
  );
}

export default AboutMe;
