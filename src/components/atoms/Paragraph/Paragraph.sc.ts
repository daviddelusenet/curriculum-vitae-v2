import styled, { DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import underline from '../../../styles/mixins/underline'

export const StyledParagraph = styled.p`
  margin: 0 0 ${rem(24)};
  line-height: 1.5;
  font-size: ${rem(18)};
  font-weight: 300;

  a {
    color: ${({ theme }) => theme.primaryLinkColor};

    &:hover {
      ${({ theme }) =>
        underline({
          backgroundColor: theme.primaryBackgroundColor,
          color: theme.primaryLinkColor,
          underlinePosition: '90%',
        })}

      ${media.greaterThan('medium')`
        ${({ theme }: { theme: DefaultTheme }) =>
          underline({
            backgroundColor: theme.primaryBackgroundColor,
            color: theme.primaryLinkColor,
          })}
      `}
    }
  }

  ${media.greaterThan('medium')`
    margin: 0 0 ${rem(40)};
    font-size: ${rem(24)};
  `}
`
