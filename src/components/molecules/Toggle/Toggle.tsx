import React, { ChangeEventHandler, FunctionComponent } from 'react'
import { StyledToggle } from './Toggle.sc'

interface ToggleProps {
  isChecked: boolean
  onChange: ChangeEventHandler
}

const Toggle: FunctionComponent<ToggleProps> = ({ isChecked, onChange }) => (
  <StyledToggle isChecked={isChecked}>
    <input checked={isChecked} onChange={onChange} type="checkbox" />
  </StyledToggle>
)

export default Toggle
