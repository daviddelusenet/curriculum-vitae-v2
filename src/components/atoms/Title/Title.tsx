import React, { FunctionComponent, ReactNode } from 'react'
import { StyledTitle } from './Title.sc'

interface TitleProps {
  children: ReactNode
}

const Title: FunctionComponent<TitleProps> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
)

export default Title
