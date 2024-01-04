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
        <Icon id={"chevron-down"} size={24} />
      </IconWrapper>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectStyled = styled.select`
  padding: 12px 48px 12px 16px;
  border-radius: 8px;
  border: none;
  appearance: none;
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
