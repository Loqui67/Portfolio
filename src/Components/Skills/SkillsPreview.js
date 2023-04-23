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
import CustomTypoTitle from "../MuiCustomComponents/CustomTypoTitle";

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
          <CustomTypoTitle divider={false}>{t`Skills`}</CustomTypoTitle>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={1}
            fontWeight={"bold"}
            color={"white"}
            justifyContent={"space-evenly"}
            width={"100%"}
          >
            <CustomBox width={"100%"}>
              <Divider>
                <CustomTypoTitle divider={false} variant="h6" color={"primary"}>
                  Soft skills
                </CustomTypoTitle>
              </Divider>
              <CustomBox>
                <List>
                  {skills.softskills.map((skill) => (
                    <ListItem key={skill.id}>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText primary={skill.title} />
                    </ListItem>
                  ))}
                </List>
              </CustomBox>
            </CustomBox>

            <Divider
              orientation="vertical"
              flexItem
              display={{ xs: "none", sm: "block" }}
            />

            <CustomBox width={"100%"}>
              <Divider>
                <CustomTypoTitle divider={false} variant="h6" color={"primary"}>
                  Hard skills
                </CustomTypoTitle>
              </Divider>

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
