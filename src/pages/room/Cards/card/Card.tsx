import React, {FC, useEffect, useState} from 'react';
import './card.css'
import {localStorageAction} from "../../../../store/localStorageActions/userActions";

interface CardProps {
    fibNumber: number
}

const Card: FC<CardProps> = ({fibNumber}) => {

    const [scram, setScram] = useState(0)

    function scramSelect (event:any) {
        setScram(parseInt(event.target.innerHTML))
        console.log(parseInt(event.target.innerHTML))
    }

    useEffect(()=>{
        const user = localStorageAction.getUser()
        console.log({...user, scram:scram})
        localStorageAction.setUser({...user, scram:scram})
    }, [scram])

    return (
        <div className={'card-root'} onClick={scramSelect}>
            {fibNumber}
        </div>
    );
}

export default Card;