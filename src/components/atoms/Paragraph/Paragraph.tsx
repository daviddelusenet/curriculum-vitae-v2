import React, { FunctionComponent, ReactNode } from 'react'
import { StyledParagraph } from './Paragraph.sc'

interface ParagraphProps {
  children: ReactNode
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => (
  <StyledParagraph>{children}</StyledParagraph>
)

export default Paragraph
