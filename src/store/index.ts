import { configureStore } from '@reduxjs/toolkit'
import { modeSlice } from '../slice'
export const store = configureStore({
    reducer: {
        mode: modeSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch