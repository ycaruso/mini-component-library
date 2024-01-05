import React from "react";
import styled from "styled-components";

import Icon from "../Icon/Icon";
import { getDisplayedValue } from "./Select.helpers";

import { COLORS } from "../../constants";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectStyled label={label} value={value} onChange={onChange}>
        {children}
      </SelectStyled>
      <IconWrapper>
        <Icon id={"chevron-down"} size={24} strokeWidth={2} />
      </IconWrapper>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectStyled = styled.select`
  padding: 12px 16px;
  padding-right: 48px;
  border-radius: 8px;
  border: none;
  appearance: none;
  color: currentColor;
  background-color: ${COLORS.transparentGray15};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  margin-top: auto;
  margin-bottom: auto;
  width: fit-content;
  height: fit-content;
  pointer-events: none;
`;

export default Select;
