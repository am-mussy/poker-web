import {IUser} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {socket} from "../../API/socket";
import {createUserId} from "../../helpers/random";

const initialState: IUser = {
    name: '',
    roomId: 0,
    scram: 0,
    host: false,
    userId: null,
}

export const userSlice = createSlice({
    name: 'appUser',
    initialState,
    reducers: {
        createRoom (state, action: PayloadAction<IUser>) {
            console.log(action)
            state.name = action.payload.name
            state.roomId = action.payload.roomId
            state.host = action.payload.host
            state.userId = createUserId()

            socket.emit('joinToRoom', state)
            socket.emit('getRoomId', state.roomId)
        },

        setScramPoint (state, action: PayloadAction<number>) {
            state.scram = action.payload
            socket.emit('setScramPoint', {userId: state.userId, scramPoint: state.scram})
        },

        connect (state, action: PayloadAction<number>){
            state.name = null
            state.roomId = action.payload
            state.host = false
            state.userId = createUserId()

            socket.emit('joinToRoom', state)
            socket.emit('getRoomId', state.roomId)
        }
    }
})

export default userSlice.reducer