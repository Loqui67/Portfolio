import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  CardMedia,
} from "@mui/material";
import { elements as rawElements } from "../../data/timelineElements";
import CustomBox from "../Custom/CustomBox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CustomTimeline() {
  const [elements, setElements] = useState([]);

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
      <CustomBox
        responsive
        centered
        sx={{
          marginBlock: "2rem",
        }}
      >
        <Timeline position="alternate">
          {elements.map((element) => (
            <TimelineItem key={element.id}>
              <TimelineSeparator>
                <TimelineDot color={"white"} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <InfoCard {...element} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </CustomBox>
    </React.Fragment>
  );
}

function InfoCard({ title, date, description, image }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Card>
        <CardHeader
          title={title}
          subheader={date}
          sx={{ textAlign: "start" }}
        />
        <CardMedia component="img" image={image} alt={title} />
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <Typography variant="body1" textAlign={"start"}>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}

export default CustomTimeline;
