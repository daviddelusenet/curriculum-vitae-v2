import React, { FunctionComponent, ReactNode } from 'react'
import styled, { DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import { underline } from '../../../styles/mixins/underline'

export interface ParagraphProps {
  children: ReactNode
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)

const StyledParagraph = styled.p`
  margin: 0 0 ${rem(24)};
  line-height: 1.5;
  font-size: ${rem(18)};
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.primaryAccentColor};

    &:hover {
      ${({ theme }) =>
        underline({
          backgroundColor: theme.primaryBackgroundColor,
          color: theme.primaryAccentColor,
          underlinePosition: '90%',
        })}

      ${media.greaterThan('medium')`
        ${({ theme }: { theme: DefaultTheme }) =>
          underline({
            backgroundColor: theme.primaryBackgroundColor,
            color: theme.primaryAccentColor,
          })}
      `}
    }
  }

  ${media.greaterThan('medium')`
    margin: 0 0 ${rem(40)};
    font-size: ${rem(24)};
  `}
`
