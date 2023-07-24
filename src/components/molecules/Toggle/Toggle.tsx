import React, { ChangeEventHandler, FunctionComponent } from "react";
import { rem } from "../../../styles/mixins/rem";
import styled, { css } from "styled-components";

export interface ToggleProps {
  isChecked: boolean;
  onChange: ChangeEventHandler;
}

export const Toggle: FunctionComponent<ToggleProps> = ({
  isChecked,
  onChange,
}) => (
  <StyledToggle $isChecked={isChecked}>
    <input checked={isChecked} onChange={onChange} type="checkbox" />
  </StyledToggle>
);

interface StyledToggleProps {
  $isChecked: boolean;
}

const StyledToggle = styled.div<StyledToggleProps>`
  position: relative;
  width: ${rem(40)};
  height: ${rem(24)};
  background-color: ${({ theme }) => theme.primaryTextColor};
  border-radius: ${rem(24)};
  cursor: pointer;
  transition: background-color 200ms ease-out;

  input {
    display: block;
    width: ${rem(40)};
    height: ${rem(24)};
    margin: 0;
    cursor: pointer;
    opacity: 0;
  }

  &::after {
    display: block;
    position: absolute;
    top: ${rem(4)};
    left: ${rem(4)};
    width: ${rem(16)};
    height: ${rem(16)};
    background-color: ${({ theme }) => theme.primaryBackgroundColor};
    content: "";
    pointer-events: none;
    border-radius: 100%;
    transition: transform 200ms ease-out;
  }

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: ${({ theme }) => theme.primaryAccentColor};

      &::after {
        transform: translate3d(${rem(16)}, 0, 0);
      }
    `}
`;
