import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const StyledList = styled.ul`
  margin: 0 0 ${rem(24)};

  ${media.greaterThan('medium')`
    margin: 0 0 ${rem(40)};
  `}
`
