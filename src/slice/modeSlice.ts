import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ModeState {
    theme: string | null
}

const initialState: ModeState = {
    theme: 'light',
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem('theme', action.payload);
        },
        createTheme: (state) => { 
            const localTheme = localStorage.getItem('theme');
            if (localTheme) {
                state.theme = localTheme;
                document.documentElement.setAttribute("data-theme", localTheme);
            }
        }
    },
})

export const { toggleMode, createTheme } = modeSlice.actions

export default modeSlice.reducer