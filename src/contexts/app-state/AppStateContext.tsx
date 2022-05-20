import { Action, globalStateReducer } from './reducer'
import { initialState, State } from './initialState'
import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

type AppStateContext = [State, Dispatch<Action>]

const AppStateContext = createContext<AppStateContext>([
  initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
])

export const useAppState = (): AppStateContext => useContext(AppStateContext)

export interface AppStateProviderProps {
  children: ReactNode
}

export const AppStateProvider: FunctionComponent<AppStateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  )
}
