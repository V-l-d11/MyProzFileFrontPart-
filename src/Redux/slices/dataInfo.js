import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    links: [],
}

const dataSlice = createSlice({
    name: 'links',
    initialState,
    reducer:{},
})

export const dataReducer = dataSlice.reducer;