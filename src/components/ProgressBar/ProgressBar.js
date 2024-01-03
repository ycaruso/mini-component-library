/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
    "--padding": "0px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
    "--padding": "0px",
  },
  large: {
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value < 0 || value > 100) {
    throw new Error("the size must be between 0 and 100");
  }

  const styles = SIZES[size];

  return (
    <>
      <Wrapper>
        <strong>{value + "%"}</strong>
        <Bar aria-valuemin={0} aria-valuenow={value} aria-valuemax={100} style={styles}>
          <Progress value={value}></Progress>
        </Bar>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;
`;

const Bar = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
  width: 370px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: 100%;
  width: ${(p) => p.value + '%'};
`;

export default ProgressBar;
