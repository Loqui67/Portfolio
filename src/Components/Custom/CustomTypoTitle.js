import { Divider, Typography } from "@mui/material";
import React from "react";

function CustomTypoTitle({
  children,
  divider = true,
  variant = "h4",
  sx = {},
  ...props
}) {
  sx = {
    textAlign: "center",
    ...sx,
  };

  return (
    <React.Fragment>
      <Typography variant={variant} sx={sx} {...props} gutterBottom>
        {children}
      </Typography>
      {divider && <Divider flexItem />}
    </React.Fragment>
  );
}

export default CustomTypoTitle;
