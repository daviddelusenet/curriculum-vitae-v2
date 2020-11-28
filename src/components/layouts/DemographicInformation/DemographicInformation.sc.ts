import media from 'styled-media-query'
import rem from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${rem(60)} 0 ${rem(40)};

  ${media.greaterThan('medium')`
    padding: ${rem(80)} 0 ${rem(64)};
  `}
`

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.secondaryFontFamily};
  font-size: ${rem(40)};
  font-weight: 700;

  ${media.greaterThan('medium')`
    font-size: ${rem(64)};
  `}
`

export const Occupation = styled.h2`
  margin: 0 0 ${rem(24)};
  font-size: ${rem(20)};

  ${media.greaterThan('medium')`
    font-size: ${rem(32)};
  `}
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const InformationWrapper = styled.div`
  flex: 1 1 auto;
  order: 2;
  width: 100%;

  ${media.greaterThan('medium')`
    order: 1;
    flex: 0 0 auto;
    width: ${rem(496)};
  `}
`

export const InformationRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  line-height: 1.5;
  font-size: ${rem(16)};

  ${media.greaterThan('medium')`
    font-size: ${rem(20)};
  `}
`

export const InformationKey = styled.p`
  flex: 0 0 auto;
  padding: 0 ${rem(20)} 0 0;
  width: ${rem(180)};

  ${media.greaterThan('medium')`
    width: ${rem(240)};
  `}
`

export const InformationValue = styled.p`
  flex: 1 1 auto;
  font-weight: 300;
  font-style: italic;
`

export const Icons = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: ${rem(24)} 0 0;

  a {
    display: block;
    flex: 0 0 auto;
    margin: 0 ${rem(16)} 0 0;
    width: ${rem(32)};
    height: ${rem(32)};

    &:hover {
      color: ${({ theme }) => theme.primaryLinkColor};
    }

    &:last-of-type {
      margin: 0;
    }
  }

  svg {
    display: block;
    transition: color 200ms ease;
    width: ${rem(32)};
    height: ${rem(32)};
  }
`

export const AvatarWrapper = styled.figure`
  flex: 0 0 auto;
  order: 1;
  margin: 0 0 ${rem(16)};
  width: ${rem(160)};

  ${media.greaterThan('medium')`
    order: 2;
    margin: 0;
    width: ${rem(200)};
  `}
`

export const Avatar = styled.img`
  display: block;
  width: 100%;
`
