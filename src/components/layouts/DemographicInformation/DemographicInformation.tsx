import React, { FunctionComponent } from 'react'
import avatar from '../../../images/avatar.png'
import { DemographicInformationTable } from '../../atoms/DemographicInformationTable/DemographicInformationTable'
import { ExternalLink } from '../../atoms/ExternalLink/ExternalLink'
import IconGithub from '../../../images/icon-github.svg'
import IconLinkedIn from '../../../images/icon-linked-in.svg'
import IconMail from '../../../images/icon-mail.svg'
import { Title, TitleSizes } from '../../atoms/Title/Title'
import { Colors } from '../../../styles/colors'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const DemographicInformation: FunctionComponent = () => (
  <StyledDemographicInformation>
    <Title hasUnderline={false} size={TitleSizes.large} tag="h1">
      David de Lusenet
    </Title>
    <Occupation>Senior front-end developer</Occupation>
    <Inner>
      <InformationWrapper>
        <DemographicInformationTable
          data={{
            'Date of birth': 'June 24, 1992',
            Nationality: 'Dutch',
            'Current location': 'Amsterdam',
            'Drivers license': 'B',
          }}
        />
        <Icons>
          <ExternalLink
            href="https://github.com/daviddelusenet"
            title="Check out my code"
          >
            <IconGithub />
          </ExternalLink>
          <ExternalLink
            href="https://www.linkedin.com/in/david-de-lusenet-31b838111/"
            title="Connect with me"
          >
            <IconLinkedIn />
          </ExternalLink>
          <ExternalLink
            href="mailto:david@lusenet.nl"
            target="_self"
            title="Send me an email"
          >
            <IconMail />
          </ExternalLink>
          {/* <ExternalLink href="tel:+31650469600" title="You used to call me on my cellphone">
                        <img src={iconPhone} />
                    </ExternalLink> */}
        </Icons>
      </InformationWrapper>
      <AvatarWrapper>
        <Avatar alt="Avatar of David de Lusenet" src={avatar} />
      </AvatarWrapper>
    </Inner>
  </StyledDemographicInformation>
)

const StyledDemographicInformation = styled.div`
  padding: ${rem(60)} 0 ${rem(40)};

  ${media.greaterThan('medium')`
    padding: ${rem(80)} 0 ${rem(64)};
  `}
`

const Occupation = styled.h2`
  margin: 0 0 ${rem(24)};
  font-size: ${rem(20)};

  ${media.greaterThan('medium')`
    font-size: ${rem(32)};
  `}
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InformationWrapper = styled.div`
  flex: 1 1 auto;
  order: 2;
  width: 100%;

  ${media.greaterThan('medium')`
    order: 1;
    flex: 0 0 auto;
    width: ${rem(496)};
  `}
`

const Icons = styled.div`
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
      color: ${({ theme }) => theme.primaryAccentColor};
    }

    &:last-of-type {
      margin: 0;
    }
  }

  svg {
    display: block;
    transition: color 200ms ease-out;
    width: ${rem(32)};
    height: ${rem(32)};
  }
`

const AvatarWrapper = styled.figure`
  flex: 0 0 auto;
  order: 1;
  margin: 0 0 ${rem(16)};
  width: ${rem(160)};
  background-color: ${Colors.ALABASTER};

  ${media.greaterThan('medium')`
    order: 2;
    margin: 0;
    width: ${rem(200)};
  `}
`

const Avatar = styled.img`
  display: block;
  width: 100%;
`
