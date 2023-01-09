import React, {useEffect, useState} from 'react';
import './home.css'

import {useNavigate} from "react-router-dom";
import {localStorageAction} from "../../store/localStorageActions/userActions";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {userSlice} from "../../store/reducers/UserSlice";


interface  UserState {
    user: any,
    setUser: any
}

// todo вынести в отдельный файл
const createRoomId = () => {
    return `${Math.random()}`.slice(-5) + new Date().getMilliseconds()
}

function Home({user, setUser}:UserState) {

    const [name, setName] = useState('')
    const [roomId, setRoomId] = useState('')
    const navigate = useNavigate();

    const {createRoom} = userSlice.actions
    const dispatch = useAppDispatch()
    const {APPuser} = useAppSelector(state => state.userReducer)

    const createRoom1 = () => {
        setUser({...user, name:name, host: true, roomId:createRoomId()})
        dispatch(createRoom({name:name, host: true, roomId: createRoomId()}))
        console.log('APPuser', APPuser)
        // navigate("/test")
    }

    const connectToRoom = () => {
        setUser({...user, name:name, host: false, roomId:roomId})
        // navigate("/test")
    }

    useEffect(()=>{
        localStorageAction.setUser(user)
        if(user.roomId) navigate("/test")
    }, [user])


    return (
        <div className={'main'}>
            <div className={'room'}>
                <input placeholder={'name'} onChange={(e)=>setName(e.target.value)}/>
                <button onClick={createRoom1}>create room</button>
                <div className={'connect'}>
                    <input type="text" placeholder={'room id'} onChange={(e)=>setRoomId(e.target.value)}/>
                    <button onClick={connectToRoom}>connect</button>
                </div>
            </div>
        </div>
    );
}

export default Home;