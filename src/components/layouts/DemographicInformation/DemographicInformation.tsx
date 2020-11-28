import {
  Avatar,
  AvatarWrapper,
  Icons,
  InformationWrapper,
  Inner,
  Name,
  Occupation,
  StyledDemographicInformation,
} from './DemographicInformation.sc'
import React, { FunctionComponent } from 'react'
import avatar from '../../../images/avatar.png'
import DemographicInformationTable from '../../atoms/DemographicInformationTable/DemographicInformationTable'
import ExternalLink from '../../atoms/ExternalLink/ExternalLink'
import IconGithub from '../../../images/icon-github.svg'
import IconLinkedIn from '../../../images/icon-linked-in.svg'
import IconMail from '../../../images/icon-mail.svg'

const DemographicInformation: FunctionComponent = () => (
  <StyledDemographicInformation>
    <Name>David de Lusenet</Name>
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

export default DemographicInformation
