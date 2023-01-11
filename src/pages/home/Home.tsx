import React, {useEffect, useState} from 'react';
import './home.css'
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {userSlice} from "../../store/reducers/UserSlice";
import {createRoomId} from "../../helpers/random";

function Home() {
    // for form
    const [name, setName] = useState('')
    const [roomId, setRoomId] = useState(0)

    const navigate = useNavigate();

    const {createRoom} = userSlice.actions
    const dispatch = useAppDispatch()
    const {roomId: userRoomID} = useAppSelector(state => state.userReducer)

    const createHostingRoom = () => {
        dispatch(createRoom({name, host: true, roomId: createRoomId()}))
    }

    const connectToHostingRoom = () => {
        dispatch(createRoom({name:name, host: false, roomId: roomId}))
    }

    useEffect(()=>{
        if(userRoomID) navigate("/room")
    }, [userRoomID])

    return (
        <div className={'main'}>
            <div className={'room'}>
                <input placeholder={'name'} onChange={(e)=>setName(e.target.value)}/>
                <button onClick={createHostingRoom}>create room</button>
                <div className={'connect'}>
                    <input type="text" placeholder={'room id'} onChange={(e)=>setRoomId(parseInt(e.target.value))}/>
                    <button onClick={connectToHostingRoom}>connect</button>
                </div>
            </div>
        </div>
    );
}

export default Home;