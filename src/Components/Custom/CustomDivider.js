import React from "react";
import { styled } from "@mui/system";

const DividerWithContent = styled("div")`
  display: flex;
  align-items: center;
  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 2px;
    background: linear-gradient(135deg, #49a09d, #9370db);
  }
  &:not(:empty)::before {
    margin-right: 0.25em;
  }
  &:not(:empty)::after {
    margin-left: 0.25em;
  }

  .margin {
    margin: 0 0.5em;
  }
`;

function CustomDivider({ children }) {
  if (!children) return <DividerWithContent />;

  const StyledChildren = () =>
    React.Children.map(children, (child) =>
      React.cloneElement(child, {
        className: `${child.props.className} ${"margin"}`,
      })
    );

  return (
    <DividerWithContent>
      <StyledChildren />
    </DividerWithContent>
  );
}

export default CustomDivider;
