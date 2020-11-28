import 'fontsource-open-sans/300.css'
import 'fontsource-open-sans/400.css'
import 'fontsource-open-sans/700.css'
import 'fontsource-source-serif-pro/700.css'
import React, { FunctionComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import media from 'styled-media-query'
import rem from './styles/mixins/rem'
import themeLight from './styles/themes/light'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 ${rem(24)} ${rem(40)};
  max-width: ${rem(760)};

  ${media.greaterThan('medium')`
    padding: 0 ${rem(32)} ${rem(80)};
  `}
`

const App: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={themeLight}>
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  </ThemeProvider>
)

export default App
