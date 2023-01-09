import React, {useEffect, useState} from 'react';
import './room.css';
import { io } from "socket.io-client";
import {useNavigate} from "react-router-dom";
import UserList from "./userList/UserList";
import {IUser} from "../../types/types";
import Cards from "./Cards/Cards";
const socket = io("http://localhost:3001/", { transports : ['websocket'] });

function Room({name, host, roomId, scram}:IUser) {

    const [userList, setUserList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(roomId)
        if(!roomId){
            navigate('/')
        }

        socket.emit('joinToRoom', {
            name: name,
            roomId: roomId,
            host: host,
            scram: scram
        })

        console.log('getRoomId')
        socket.emit('getRoomId')
        socket.on('getRoomId', (data)=>{
            console.log(data)
            setUserList(data)
        })


    }, [])

    return (
        <div className="Room">
            <div>ROOM ID:{roomId}</div>
            <Cards/>
            <UserList users={userList}/>
        </div>
    );
}

export default Room;
