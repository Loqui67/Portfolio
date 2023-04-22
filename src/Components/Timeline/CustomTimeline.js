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
import { Stack, Typography } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import { elements as rawElements } from "../../data/timelineElements";
import { t } from "@lingui/macro";
import CustomBox from "../MuiCustomComponents/CustomBox";

function CustomTimeline() {
  const { elementId } = useParams();
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(
    elements.find((element) => element.id === elementId)
  );

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
        <CustomBox whiteBox responsive centered>
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
                    opacity: "0.5",
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
                  <Link
                    to={element.id}
                    onClick={() => {
                      setSelectedElement(element);
                    }}
                  >
                    <Typography color={"primary"}>{element.title}</Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CustomBox>

        <Outlet context={selectedElement} />
      </Stack>
    </React.Fragment>
  );
}

export default CustomTimeline;
