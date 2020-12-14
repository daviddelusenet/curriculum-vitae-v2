import { State } from './initialState'

export enum Actions {
  SET_HAS_DARK_MODE = 'GLOBAL.SET_HAS_DARK_MODE',
}

interface SetHasDarkModeAction {
  payload: State['hasDarkMode']
  type: typeof Actions.SET_HAS_DARK_MODE
}

export type Action = SetHasDarkModeAction

export const globalStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.SET_HAS_DARK_MODE:
      return {
        ...state,
        hasDarkMode: action.payload,
      }

    default:
      return state
  }
}
