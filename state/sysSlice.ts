import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

interface sysstate {
    saves: string[]
}

const initialState: sysstate = {

    saves:[]
}
export const sysSlice = createSlice({
    name: 'sys',
    initialState,
    reducers: {

        addSave:(state,action)=>{
            state.saves.unshift(action.payload)
        },
        setSave:(state,action)=>{
            state.saves = action.payload
        }
    }
})

export const { addSave, setSave } = sysSlice.actions
export default sysSlice.reducer