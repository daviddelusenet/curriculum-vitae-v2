import { Label, StyledToggleDarkMode } from './ToggleDarkMode.sc'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Actions } from '../../../contexts/app-state/reducer'
import Toggle from '../../molecules/Toggle/Toggle'
import { useAppState } from '../../../contexts/app-state/AppStateContext'

const ToggleDarkMode: FunctionComponent = () => {
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

export default ToggleDarkMode
