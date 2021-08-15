import React, { FunctionComponent, ReactNode } from 'react'
import { StyledTitle, TitleSizes } from './Title.sc'

interface TitleProps {
  children: ReactNode
  hasUnderline?: boolean
  size?: TitleSizes
  tag?: 'h1' | 'h2' | 'h3'
}

const Title: FunctionComponent<TitleProps> = ({
  children,
  hasUnderline = true,
  size = TitleSizes.small,
  tag = 'h3',
}) => (
  <StyledTitle as={tag} hasUnderline={hasUnderline} size={size}>
    {children}
  </StyledTitle>
)

export default Title
