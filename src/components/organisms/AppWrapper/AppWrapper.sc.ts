import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const StyledAppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${rem(24)} ${rem(40)};
  max-width: ${rem(760)};

  ${media.greaterThan('medium')`
    padding: 0 ${rem(32)} ${rem(80)};
  `}
`
