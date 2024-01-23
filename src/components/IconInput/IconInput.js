import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import VisuallyHidden from "../VisuallyHidden";

import Icon from "../Icon/Icon";

const styles = {
  small: {
    size: 16 + "px",
    fontSize: 14 / 16 + "rem",
    "--border": 1 + "px",
    "--height": 24 + "px",
    "--paddingLeft": 24 + "px",
    strokeWidth: 1 + "px",
    "--fontWeight": 400,
  },
  large: {
    size: 24 + "px",
    fontSize: 18 / 16 + "rem",
    "--border": 2 + "px",
    "--height": 36 + "px",
    "--paddingLeft": 36 + "px",
    strokeWidth: 2 + "px",
    "--fontWeight": 700,
  }
};

const IconInput = ({ label, icon, width = 250, size, placeholder, ...delegate }) => {

  return (
    <Wrapper style={styles[size]} width={width}>
      <IconWrapper>
        <Icon id={`${icon}`} size={styles[size].size} strokeWidth={styles[size].strokeWidth} />
      </IconWrapper>
      <Input style={styles[size]} placeholder={placeholder} {...delegate}></Input>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: fit-content;
  border-bottom: var(--border) solid ${COLORS.black};
  color: ${COLORS.gray700};
  height: var(--height);
  width: ${p => p.width + "px"};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  pointer-events: none;
`;

const Input = styled.input`
  padding-left: var(--paddingLeft);
  width: 100%;
  border: none;
  height: 100%;
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 3px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 1px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
