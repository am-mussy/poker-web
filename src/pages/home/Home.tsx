import React, { useEffect, useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userSlice } from "../../store/reducers/UserSlice";
import { createRoomId } from "../../helpers/random";

function Home() {
  // for form
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState(0);
  const [activeCreateRoom, setActiveCreateRoom] = useState(false);
  const [activeConnect, setActiveConnect] = useState(false);

  const navigate = useNavigate();

  const { createRoom, connect } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.roomReducer);

  const createHostingRoom = () => {
    setActiveCreateRoom(true);
    name && dispatch(createRoom({ name, host: true, roomId: createRoomId() }));
  };

  const connectToHostingRoom = () => {
    setActiveConnect(true);
    setActiveCreateRoom(true);
    name && roomId && dispatch(connect({ name: name, roomId: roomId }));
  };

  useEffect(() => {
    console.log({ users });
    if (users.length) console.log("USER IN ROOM");
    if (users.length) navigate("/room");
  }, [users]);

  const inputNameValidation = () => {
    if (activeCreateRoom) {
      if (!name) return "inputError";
    }
  };

  const inputRoomIdValidation = () => {
    if (activeConnect) {
      if (!roomId) return "inputError";
    }
  };

  return (
    <div className={"main"}>
      <div className={"room"}>
        <input
          className={inputNameValidation()}
          placeholder={"name"}
          onChange={(e) => setName(e.target.value)}
          onClick={() => setActiveConnect(false)}
        />
        <button onClick={createHostingRoom}>create room</button>
        <div className={"connect"}>
          <input
            className={inputRoomIdValidation()}
            type="text"
            placeholder={"room id"}
            onChange={(e) => setRoomId(parseInt(e.target.value))}
          />
          <button onClick={connectToHostingRoom}>connect</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
