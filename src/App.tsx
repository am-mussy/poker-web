import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Room from "./pages/room/Room";
import Home from "./pages/home/Home";
import {roomSlice} from "./store/reducers/RoomSlice";
import {useAppDispatch} from "./hooks/hooks";
import {socket} from "./API/socket";
import {userSlice} from "./store/reducers/UserSlice";




function App() {

    const {initialize} = roomSlice.actions
    const {connect} = userSlice.actions

    const dispatch = useAppDispatch()
    socket.on('getRoomId', (users)=>{
        console.log({users})
        dispatch(initialize(users))
    })

    const navigate = useNavigate();
    console.log(window.location.href)


    useEffect(()=>{
        let url = window.location.href.split("/")
        if(url[3]==='room' && url[4]){
            dispatch(connect(parseInt(url[4])))
            navigate("/room")
        }
    }, [])
    return (
        <>
            <Routes>
                <Route path="/room" element={<Room />}/>
                <Route path="/" element={<Home />}/>
            </Routes>

        </>
    );
}

export default App;
