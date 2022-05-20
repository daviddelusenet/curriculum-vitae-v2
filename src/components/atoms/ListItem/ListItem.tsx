import React, { FunctionComponent, ReactNode } from 'react'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import styled from 'styled-components'

export interface ListItemProps {
  children: ReactNode
}

export const ListItem: FunctionComponent<ListItemProps> = ({ children }) => (
  <StyledListItem>{children}</StyledListItem>
)

const StyledListItem = styled.li`
  position: relative;
  padding: 0 0 0 ${rem(16)};
  line-height: 1.5;
  font-size: ${rem(18)};
  font-weight: 300;

  ${media.greaterThan('medium')`
    padding: 0 0 0 ${rem(24)};
    font-size: ${rem(24)};
  `}

  &::after,
    &::before {
    display: block;
    position: absolute;
    top: ${rem(13)};
    left: 0;
    background-color: ${({ theme }) => theme.primaryTextColor};
    width: ${rem(8)};
    height: ${rem(1)};
    content: '';

    ${media.greaterThan('medium')`
      top: ${rem(18)};
      width: ${rem(12)};
    `}
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`
