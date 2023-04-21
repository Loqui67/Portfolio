import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import { elements as rawElements } from "../../data/timelineElements";
import { t } from "@lingui/macro";

function CustomTimeline() {
  const [elements, setElements] = useState([]);
  const { elementId } = useParams();

  useEffect(() => {
    const filteredElements = rawElements().map((element) => {
      const newElement = {};
      Object.entries(element).forEach(([key, value]) => {
        newElement[key] = typeof value === "function" ? value() : value;
      });
      return newElement;
    });

    setElements(filteredElements);
  }, []);

  return (
    <React.Fragment>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
        justifyContent="space-evenly"
        alignItems="center"
        width="100%"
      >
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
            minHeight: "calc(100vh - 200px)",
          }}
        >
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  paragraph
                  display={"block"}
                  variant="subtitle1"
                  sx={{
                    color: "primary.main",
                    opacity: "0.8",
                    alignItems: "center",
                    paddingLeft: "0.5rem",
                  }}
                >
                  {t`Click on an event to learn more`}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {elements.map((element) => (
              <TimelineItem key={element.id}>
                <TimelineOppositeContent color="textSecondary">
                  {element.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    color="secondary"
                    variant={element.future ? "outlined" : "filled"}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Link to={element.id}>
                    <Typography variant="h6" sx={{ color: "primary.main" }}>
                      {element.title}
                    </Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        <Outlet context={elements[elementId]} />
      </Stack>
    </React.Fragment>
  );
}

export default CustomTimeline;
