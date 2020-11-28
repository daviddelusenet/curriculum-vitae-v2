import React, { FunctionComponent, ReactNode } from 'react'
import { StyledListItem } from './ListItem.sc'

interface ListItemProps {
  children: ReactNode
}

const ListItem: FunctionComponent<ListItemProps> = ({ children }) => (
  <StyledListItem>{children}</StyledListItem>
)

export default ListItem
