import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { hardskills, softskills } from "../../data/skillsElements";
import { t } from "@lingui/macro";
import CustomBox from "../MuiCustomComponents/CustomBox";

function SkillsPreview() {
  const [skills, setSkills] = useState({ hardskills, softskills });

  useEffect(() => {
    const filteredSkills = { hardskills, softskills };
    Object.entries(filteredSkills).forEach(([key, value]) => {
      filteredSkills[key] = value.map((skill) => {
        const newSkill = {};
        Object.entries(skill).forEach(([key, value]) => {
          newSkill[key] = typeof value === "function" ? value() : value;
        });
        return newSkill;
      });
    });
    setSkills(filteredSkills);
  }, []);

  return (
    <React.Fragment>
      <CustomBox
        whiteBox
        responsive
        centered
        sx={{
          width: "1200px",
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems={"center"}
          width={"100%"}
        >
          <Typography variant="h4" color={"primary"}>
            {t`Skills`}
          </Typography>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={1}
            fontWeight={"bold"}
            color={"white"}
            justifyContent={"space-evenly"}
            width={"100%"}
          >
            <CustomBox width={"100%"}>
              <Typography variant="h6" color={"primary"} textAlign={"center"}>
                Soft skills
              </Typography>

              <Divider
                flexItem
                orientation={{ sm: "horizontal", md: "vertical" }}
              />
              <CustomBox>
                <List>
                  {skills.softskills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText key={skill.id}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <Typography variant="body1" color={"primary"}>
                            {skill.title}
                          </Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CustomBox>
            </CustomBox>

            <Divider orientation="vertical" flexItem />

            <CustomBox width={"100%"}>
              <Typography variant="h6" color={"primary"} textAlign={"center"}>
                Hard skills
              </Typography>
              <Divider flexItem />
              <CustomBox>
                <List>
                  {skills.hardskills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText key={skill.id}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <Typography variant="body1" color={"primary"}>
                            {skill.title}
                          </Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </CustomBox>
            </CustomBox>
          </Stack>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default SkillsPreview;
