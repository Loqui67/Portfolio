import React from "react";
import { Navigate, useOutletContext, useParams } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { isValidElementId } from "../../data/timelineElements";
import CustomBox from "../Custom/CustomBox";

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
      <CustomBox whiteBox responsive sx={{ width: "1200px" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6" gutterBottom>
          {date}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" mt={2}>
          {description}
        </Typography>
      </CustomBox>
    </React.Fragment>
  );
}

export default TimelineDetails;
