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
      backgroundColor: "rgba(255, 255, 255, .8)",
      boxShadow: 1,
      borderRadius: "1rem",
      paddingBlock: "2rem",
      paddingInline: "3rem",
      ...sx,
    });

  responsive &&
    (sx = { maxWidth: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, ...sx });

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
