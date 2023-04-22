import React from "react";
import { Box } from "@mui/material";

function CustomBox({
  children,
  whiteBox = false,
  responsive = false,
  centered = false,
  sx = {},
  ...props
}) {
  whiteBox &&
    (sx = {
      backgroundColor: "white.main",
      opacity: "0.8",
      boxShadow: 1,
      borderRadius: "1rem",
      padding: "1rem",
      ...sx,
    });

  responsive &&
    (sx = { maxWidth: { xs: "90%", sm: "80%", md: "60%", lg: "50%" }, ...sx });

  centered &&
    (sx = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...sx,
    });

  return (
    <Box sx={sx} {...props}>
      {children}
    </Box>
  );
}

export default CustomBox;
