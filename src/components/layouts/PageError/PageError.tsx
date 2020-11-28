import React, { FunctionComponent, ReactNode } from 'react'
import { StyledPageError } from './PageError.sc'

interface PageErrorProps {
  children: ReactNode
}

const PageError: FunctionComponent<PageErrorProps> = ({ children }) => (
  <StyledPageError>{children}</StyledPageError>
)

export default PageError
