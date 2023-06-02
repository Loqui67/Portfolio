import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomBox from "../Custom/CustomBox";
import CustomTypoTitle from "../Custom/CustomTypoTitle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { t } from "@lingui/macro";

function AboutMe() {
  const projects = [
    {
      name: t`Portfolio website`,
      description: t`Description portfolio website`,
      link: "https://github.com/Loqui67/Portfolio",
      type: "personal",
    },
    {
      name: t`Vacation planner website`,
      description: t`Description vacation planner website`,
      link: "https://github.com/Loqui67/site-vacances",
      type: "personal",
    },
    {
      name: t`Plateformer game`,
      description: t`Description plateformer game`,
      link: "https://github.com/Loqui67/FirstPlateformer",
      type: "personal",
    },
    {
      name: t`alcatel dashboard`,
      description: t`Description alcatel dashboard`,
      link: "https://github.com/Loqui67/dashboardAlcaltel",
      type: "professional",
    },
    {
      name: t`backup management software`,
      description: t`Description backup management software`,
      link: "https://github.com/Loqui67/Projet-Programmation-Systeme",
      type: "professional",
    },
  ];

  return (
    <React.Fragment>
      <CustomBox centered responsive width={"100%"} marginBlock={"5vh"}>
        <Stack
          direction={"column"}
          spacing={8}
          alignItems={"center"}
          width={"100%"}
        >
          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} width={"100%"}>
              <CustomTypoTitle>{t`About`}</CustomTypoTitle>
              <Typography variant={"body1"} mt={2}>
                {t`About me 1rst paragraph`}
              </Typography>
              <Typography variant={"body1"} mt={2}>
                {t`About me 2nd paragraph`}
              </Typography>
              <Typography variant={"body1"} mt={2}>
                {t`About me 3rd paragraph`}
              </Typography>
            </Stack>
          </CustomBox>

          <CustomBox whiteBox centered width={"100%"}>
            <Stack direction={"column"} width={"100%"}>
              <CustomTypoTitle divider={false}>
                {t`My projects`}
              </CustomTypoTitle>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                width={"100%"}
                justifyContent={"space-evenly"}
              >
                <CustomBox width={"100%"}>
                  <Stack direction={"column"} spacing={2} width={"100%"}>
                    <Divider>
                      <CustomTypoTitle divider={false} variant="h6">
                        {t`Projets personnels`}
                      </CustomTypoTitle>
                    </Divider>
                    <List>
                      {projects
                        .filter((project) => project.type === "personal")
                        .map((project) => (
                          <ListItem key={project.name}>
                            <ListItemText
                              primary={project.name}
                              secondary={project.description}
                              sx={{ width: "100%" }}
                            />
                            <Divider
                              orientation={"vertical"}
                              flexItem
                              sx={{ marginInline: 2 }}
                            />

                            <IconButton
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </ListItem>
                        ))}
                    </List>
                  </Stack>
                </CustomBox>
                <Divider
                  orientation={"vertical"}
                  flexItem
                  display={{ xs: "none", sm: "block" }}
                />
                <CustomBox width={"100%"}>
                  <Stack direction={"column"} spacing={2} width={"100%"}>
                    <Divider>
                      <CustomTypoTitle divider={false} variant="h6">
                        {t`Projets professionnels`}
                      </CustomTypoTitle>
                    </Divider>
                    <List>
                      {projects
                        .filter((project) => project.type === "professional")
                        .map((project) => (
                          <ListItem key={project.name}>
                            <ListItemText
                              primary={project.name}
                              secondary={project.description}
                              sx={{ width: "100%" }}
                            />
                            <Divider
                              orientation={"vertical"}
                              flexItem
                              sx={{ marginInline: 2 }}
                            />

                            <IconButton
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </ListItem>
                        ))}
                    </List>
                  </Stack>
                </CustomBox>
              </Stack>
            </Stack>
          </CustomBox>
        </Stack>
      </CustomBox>
    </React.Fragment>
  );
}

export default AboutMe;
