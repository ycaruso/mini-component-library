import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import VisuallyHidden from "../VisuallyHidden";

import Icon from "../Icon/Icon";

const STYLES = {
  small: {
    size: 16,
    fontSize: 14 / 16,
    border: 1,
    height: 24,
    strokeWidth: 1,
    fontWeight: 400,
  },
  large: {
    size: 24,
    fontSize: 18 / 16,
    border: 2,
    height: 36,
    strokeWidth: 2,
    fontWeight: 700,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegate
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          id={`${icon}`}
          size={styles.size}
          strokeWidth={styles.strokeWidth}
        />
      </IconWrapper>
      <Input
        style={{
          "--width": width + "px",
          "--fontSize": styles.fontSize + "rem",
          "--border": styles.border + "px",
          "--height": styles.height + "px",
        }}
        placeholder={placeholder}
        {...delegate}
      ></Input>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

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
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  padding-left: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 3px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 1px;
  }
`;

export default IconInput;
