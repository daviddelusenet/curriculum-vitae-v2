import React, { FunctionComponent, ReactNode } from 'react'
import { StyledSubtitle } from './Subtitle.sc'

interface SubtitleProps {
  children: ReactNode
  date: string
}

const Subtitle: FunctionComponent<SubtitleProps> = ({ children, date }) => (
  <StyledSubtitle>
    <span>{date}</span>
    {children}
  </StyledSubtitle>
)

export default Subtitle
