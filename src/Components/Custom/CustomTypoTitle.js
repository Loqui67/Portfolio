import { Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const LittleDivider = styled(Typography)`
  &::after {
    content: "";
    display: block;
    background: linear-gradient(135deg, #49a09d, #9370db);
    margin-top: 10px;
    height: 3px;
  }
`;

function CustomTypoTitle({
  children,
  divider = false,
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
      {divider ? (
        <LittleDivider variant={variant} sx={sx} {...props} mb={2}>
          {children}
        </LittleDivider>
      ) : (
        <Typography variant={variant} sx={sx} {...props} mb={2}>
          {children}
        </Typography>
      )}
    </React.Fragment>
  );
}

export default CustomTypoTitle;
