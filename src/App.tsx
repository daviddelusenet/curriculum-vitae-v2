import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/source-serif-pro/700.css";
import React, { FunctionComponent } from "react";
import { AppStateProvider } from "./contexts/app-state/AppStateContext";
import { AppWrapper } from "./components/organisms/AppWrapper/AppWrapper";
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "./contexts/theme/ThemeContext";
import { ToggleDarkMode } from "./components/organisms/ToggleDarkMode/ToggleDarkMode";
import { SEO } from "./components/molecules/SEO/SEO";

const App: FunctionComponent = ({ children }) => (
  <AppStateProvider>
    <ThemeProvider>
      <SEO />
      <GlobalStyles />
      <ToggleDarkMode />
      <AppWrapper>{children}</AppWrapper>
    </ThemeProvider>
  </AppStateProvider>
);

export default App;
