import React, { FunctionComponent, ReactNode } from 'react'
import { StyledList } from './List.sc'

interface ListProps {
  children: ReactNode
}

const List: FunctionComponent<ListProps> = ({ children }) => (
  <StyledList>{children}</StyledList>
)

export default List
