import React, {FC} from 'react';
import {IUser} from "../../../types/types";
import './userList.css'
import UserLine from "./userLine/UserLine";

interface UserListProps {
    users:IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    console.log('users', users)
    return (
        <div className={'user-list-root'}>
            {users.map(({name,scram})=><UserLine key={`${name}_key`} name={name} scram={scram}/>)}
        </div>
    );
}

export default UserList;