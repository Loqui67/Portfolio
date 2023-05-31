import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { hardskills, softskills } from "../../data/skillsElements";
import { t } from "@lingui/macro";
import CustomBox from "../Custom/CustomBox";
import CustomTypoTitle from "../Custom/CustomTypoTitle";

function SkillsPreview() {
  const [value, setValue] = useState(0);
  const [skills, setSkills] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <React.Fragment>
      <CustomBox
        whiteBox
        width={{ xs: "90%", sm: "80%", md: "70%", lg: "60%" }}
        centered
        sx={{
          marginBlock: "5vh",
          paddingInline: "5rem",
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems={"center"}
          width={"100%"}
        >
          <CustomTypoTitle>{t`Skills`}</CustomTypoTitle>

          <Tabs value={value} onChange={handleChange}>
            <Tab label="Soft skills" />
            <Tab label="Hard skills" />
          </Tabs>

          <TabPanel value={value} index={0}>
            {skills && SkillsList(skills.softskills)}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {skills && SkillsList(skills.hardskills)}
          </TabPanel>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

function SkillsList(skills) {
  return (
    <CustomBox width={"100%"}>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 0,
          minHeight: "30vh",
        }}
      >
        {skills.map((skill) => (
          <ListItem
            sx={{
              height: "25%",
              width: { xs: "100%", sm: "50%", md: "25%" },
            }}
          >
            <ListItemIcon
              sx={{
                width: "25%",
                display: "flex",
                justifyContent: "end",
                paddingRight: "0.5rem",
              }}
            >
              {skill.icon}
            </ListItemIcon>
            <ListItemText
              key={skill.id}
              sx={{ width: "75%", paddingLeft: "0.5rem" }}
            >
              <Typography variant="body1" color={"primary"}>
                {skill.title}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </CustomBox>
  );
}

export default SkillsPreview;
