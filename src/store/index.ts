import { configureStore } from "@reduxjs/toolkit"
import reducer from "./emailComposerSlice"

export const store = configureStore({ reducer: { emailComposer: reducer } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
