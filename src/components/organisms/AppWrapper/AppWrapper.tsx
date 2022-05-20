import React, { FunctionComponent, ReactNode } from 'react'
import media from 'styled-media-query'
import { rem } from '../../../styles/mixins/rem'
import styled from 'styled-components'
import { useAppState } from '../../../contexts/app-state/AppStateContext'

export interface AppWrapperProps {
  children: ReactNode
}

export const AppWrapper: FunctionComponent<AppWrapperProps> = ({
  children,
}) => {
  const [{ hasDarkMode }] = useAppState()

  return typeof hasDarkMode === 'boolean' ? (
    <StyledAppWrapper>{children}</StyledAppWrapper>
  ) : null
}

const StyledAppWrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${rem(24)} ${rem(40)};
  max-width: ${rem(760)};

  ${media.greaterThan('medium')`
    padding: 0 ${rem(32)} ${rem(80)};
  `}
`
