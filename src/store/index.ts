import { configureStore } from '@reduxjs/toolkit'
import { modeSlice, authSlice } from '../slice'
export const store = configureStore({
    reducer: {
        mode: modeSlice,
        auth: authSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch