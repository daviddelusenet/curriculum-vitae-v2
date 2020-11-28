import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  line-height: 1.5;
  font-size: ${rem(16)};

  ${media.greaterThan('medium')`
    font-size: ${rem(20)};
  `}
`

export const Key = styled.p`
  flex: 0 0 auto;
  padding: 0 ${rem(20)} 0 0;
  width: ${rem(180)};

  ${media.greaterThan('medium')`
    width: ${rem(240)};
  `}
`

export const Value = styled.p`
  flex: 1 1 auto;
  font-weight: 300;
  font-style: italic;
`
