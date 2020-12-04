import { Label, StyledToggleDarkMode } from './ToggleDarkMode.sc'
import React, { FunctionComponent, useCallback, useEffect } from 'react'
import { Actions } from '../../../contexts/app-state/reducer'
import Toggle from '../../molecules/Toggle/Toggle'
import { useAppState } from '../../../contexts/app-state/AppStateContext'

const ToggleDarkMode: FunctionComponent = () => {
  const [{ isDarkModeOn }, dispatch] = useAppState()

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch({
        payload: true,
        type: Actions.SET_IS_DARK_MODE_ON,
      })
    }
  }, [dispatch])

  const handleClick = useCallback(() => {
    dispatch({
      payload: !isDarkModeOn,
      type: Actions.SET_IS_DARK_MODE_ON,
    })
  }, [dispatch, isDarkModeOn])

  return (
    <StyledToggleDarkMode>
      <Label onClick={handleClick}>Dark mode</Label>
      <Toggle isChecked={isDarkModeOn} onClick={handleClick} />
    </StyledToggleDarkMode>
  )
}

export default ToggleDarkMode
