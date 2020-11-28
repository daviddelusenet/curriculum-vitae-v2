import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'
import underline from '../../../styles/mixins/underline'

export const StyledTitle = styled.h3`
  ${({ theme }) =>
    underline({
      backgroundColor: theme.primaryBackgroundColor,
      color: theme.primaryTextColor,
      underlinePosition: '92%',
    })}
  margin: 0 0 ${rem(16)};
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-size: ${rem(28)};
  font-weight: 700;

  ${media.greaterThan('medium')`
    font-size: ${rem(40)};
  `}
`

export default StyledTitle
