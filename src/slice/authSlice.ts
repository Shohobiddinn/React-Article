import { createSlice } from '@reduxjs/toolkit'
import { AuthSlice } from '../@types'

const initialState: AuthSlice = {
    login: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginType(state) {
            state.login = !state.login;
        },
    },
})

export const { loginType } = authSlice.actions

export default authSlice.reducer