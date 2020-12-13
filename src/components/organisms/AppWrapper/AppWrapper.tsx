import React, { FunctionComponent, ReactNode } from 'react'
import { StyledAppWrapper } from './AppWrapper.sc'
import { useAppState } from '../../../contexts/app-state/AppStateContext'

interface AppWrapperProps {
  children: ReactNode
}

const AppWrapper: FunctionComponent<AppWrapperProps> = ({ children }) => {
  const [{ hasDarkMode }] = useAppState()

  return typeof hasDarkMode === 'boolean' ? (
    <StyledAppWrapper>{children}</StyledAppWrapper>
  ) : null
}
export default AppWrapper
