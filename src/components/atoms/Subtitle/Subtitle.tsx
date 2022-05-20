import React, { FunctionComponent, ReactNode } from "react";
import media from "styled-media-query";
import { rem } from "../../../styles/mixins/rem";
import styled from "styled-components";
import { underline } from "../../../styles/mixins/underline";

export interface SubtitleProps {
  children: ReactNode;
  date: string;
}

export const Subtitle: FunctionComponent<SubtitleProps> = ({
  children,
  date,
}) => (
  <StyledSubtitle>
    <span>{date}</span>
    {children}
  </StyledSubtitle>
);

const StyledSubtitle = styled.h4`
  margin: 0 0 ${rem(4)};
  line-height: 1.5;
  font-size: ${rem(14)};
  font-weight: 300;
  font-style: italic;

  span {
    display: block;
    font-weight: 700;
    font-style: normal;
  }

  a {
    color: ${({ theme }) => theme.primaryAccentColor};

    &:hover {
      ${({ theme }) =>
        underline({
          backgroundColor: theme.primaryBackgroundColor,
          color: theme.primaryAccentColor,
          underlinePosition: "92%",
        })}
    }
  }

  ${media.greaterThan("medium")`
    margin: 0 0 ${rem(8)};
    font-size: ${rem(18)};
  `}
`;
