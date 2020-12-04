import React, { FunctionComponent, MouseEventHandler } from 'react'
import { StyledToggle } from './Toggle.sc'

interface ToggleProps {
  isChecked: boolean
  onClick: MouseEventHandler
}

const Toggle: FunctionComponent<ToggleProps> = ({ isChecked, onClick }) => (
  <StyledToggle isChecked={isChecked}>
    <input checked={isChecked} onClick={onClick} type="checkbox" />
  </StyledToggle>
)

export default Toggle
