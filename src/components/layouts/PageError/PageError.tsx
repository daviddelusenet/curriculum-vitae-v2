import React, { FunctionComponent, ReactNode } from 'react'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import styled from 'styled-components'

export interface PageErrorProps {
  children: ReactNode
}

export const PageError: FunctionComponent<PageErrorProps> = ({ children }) => (
  <StyledPageError>{children}</StyledPageError>
)

const StyledPageError = styled.div`
  padding: ${rem(60)} 0 ${rem(40)};

  ${media.greaterThan('medium')`
    padding: ${rem(80)} 0 ${rem(64)};
  `}
`
