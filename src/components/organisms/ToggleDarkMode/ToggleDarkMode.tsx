import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Actions } from '../../../contexts/app-state/reducer'
import { Toggle } from '../../molecules/Toggle/Toggle'
import { useAppState } from '../../../contexts/app-state/AppStateContext'
import { rem } from '../../../styles/mixins/rem'
import styled from 'styled-components'

export const ToggleDarkMode: FunctionComponent = () => {
  const [{ hasDarkMode }, dispatch] = useAppState()
  const [isBeingHovered, setIsBeingHovered] = useState(false)

  useEffect(() => {
    dispatch({
      payload:
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,
      type: Actions.SET_HAS_DARK_MODE,
    })
  }, [dispatch])

  const toggleDarkMode = useCallback(() => {
    dispatch({
      payload: !hasDarkMode,
      type: Actions.SET_HAS_DARK_MODE,
    })
  }, [dispatch, hasDarkMode])

  const handleMouseEnter = useCallback(() => {
    setIsBeingHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsBeingHovered(false)
  }, [])

  return (
    <StyledToggleDarkMode
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isBeingHovered && (
        <Label onClick={toggleDarkMode}>
          Dark mode is {hasDarkMode ? 'on' : 'off'}
        </Label>
      )}
      <Toggle isChecked={hasDarkMode || false} onChange={toggleDarkMode} />
    </StyledToggleDarkMode>
  )
}

const StyledToggleDarkMode = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: fixed;
  bottom: ${rem(12)};
  right: ${rem(12)};
`

const Label = styled.label`
  margin: 0 ${rem(8)} 0 0;
  font-size: ${rem(14)};
  cursor: pointer;
`
