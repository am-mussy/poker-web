import {IRoom, IUser} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IRoom = {
    users: [],
    scramPointIsHidden: false
}
export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        initialize (state, action: PayloadAction<IUser[]>) {
            console.log('initialize', action.payload)
            state.users = action.payload
        },
        changeScramPointVisibility (state){
            state.scramPointIsHidden = !state.scramPointIsHidden
        }
    }
})

export default roomSlice.reducer