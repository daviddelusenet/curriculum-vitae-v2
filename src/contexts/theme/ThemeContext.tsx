import React, { FunctionComponent, ReactNode } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { themeDark } from '../../styles/themes/dark'
import { themeLight } from '../../styles/themes/light'
import { useAppState } from '../app-state/AppStateContext'

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => {
  const [{ hasDarkMode }] = useAppState()

  return (
    <StyledComponentsThemeProvider theme={hasDarkMode ? themeDark : themeLight}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
