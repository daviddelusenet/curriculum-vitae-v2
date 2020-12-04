import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    // Colors
    primaryBackgroundColor: string
    primaryAccentColor: string
    primaryTextColor: string
    // Fonts
    primaryFontFamily: string
    secondaryFontFamily: string
  }
}
