import { State } from './initialState'

export enum Actions {
  SET_IS_DARK_MODE_ON = 'GLOBAL.SET_IS_DARK_MODE_ON',
}

interface SetIsDarkModeOnAction {
  payload: State['isDarkModeOn']
  type: typeof Actions.SET_IS_DARK_MODE_ON
}

export type Action = SetIsDarkModeOnAction

export const globalStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.SET_IS_DARK_MODE_ON:
      return {
        ...state,
        isDarkModeOn: action.payload,
      }

    default:
      return state
  }
}
