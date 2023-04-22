import {
  Box,
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
            {t`Skills`}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            fontWeight={"bold"}
            color={"white.main"}
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
                  {skills.softskills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText key={skill.id}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <Typography variant="body1" color={"primary.main"}>
                            {skill.title}
                          </Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  ))}
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
                  {skills.hardskills.map((skill) => (
                    <ListItem>
                      <ListItemIcon>{skill.icon}</ListItemIcon>
                      <ListItemText key={skill.id}>
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={1}
                        >
                          <Typography variant="body1" color={"primary.main"}>
                            {skill.title}
                          </Typography>
                        </Stack>
                      </ListItemText>
                    </ListItem>
                  ))}
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
