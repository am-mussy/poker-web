import React, {useState} from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Room from "./pages/room/Room";
import Home from "./pages/home/Home";
import {IUser} from "./types/types";

const defaultState:IUser = {
    name: '',
    host: false,
    roomId: '',
    scram: 0
}

function App() {

    const [user, setUser] = useState(defaultState)

    return (
        <>
            <Routes>
                <Route path="/test" element={<Room roomId={user.roomId} name={user.name} host={user.host} scram={user.scram}/>}/>
                <Route path="/" element={<Home user={user} setUser={setUser}/>}/>
            </Routes>

        </>
    );
}

export default App;
