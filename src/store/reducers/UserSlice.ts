import {IUser} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    APPuser: IUser;
}

const initialState: AppState = {
    APPuser : {
        name: '',
        roomId: '',
        scram: 0,
        host: false
    }
}

export const userSlice = createSlice({
    name: 'appUser',
    initialState,
    reducers: {
        createRoom (state, action: PayloadAction<IUser>) {
            state.APPuser = action.payload
        }
    }
})

export default userSlice.reducer