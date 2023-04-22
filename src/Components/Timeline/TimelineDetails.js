import React from "react";
import { Navigate, useOutletContext, useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { isValidElementId } from "../../data/timelineElements";

function TimelineDetails() {
  const selectedElement = useOutletContext();
  const { elementId } = useParams();

  const validId = isValidElementId(elementId);

  if (!selectedElement) {
    return !validId && <Navigate to="/timeline" />;
  }

  const { title, date, description } = selectedElement;

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: "white.main",
          opacity: "0.8",
          boxShadow: 1,
          borderRadius: "1rem",
          padding: "1rem",
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
        }}
      >
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: "primary.main" }} gutterBottom>
          {date}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "primary.main" }}>
          {description}
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default TimelineDetails;
