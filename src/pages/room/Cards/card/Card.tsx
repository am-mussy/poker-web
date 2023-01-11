import React, {FC} from 'react';
import './card.css'
import {useAppDispatch} from "../../../../hooks/hooks";
import {userSlice} from "../../../../store/reducers/UserSlice";

interface CardProps {
    fibNumber: number
}

const Card: FC<CardProps> = ({fibNumber}) => {

    const {setScramPoint} = userSlice.actions
    const dispatch = useAppDispatch()
    function scramSelect (event:any) {
        dispatch(setScramPoint(event.target.innerHTML))
    }

    return (
        <div className={'card-root'} onClick={scramSelect}>
            {fibNumber}
        </div>
    );
}

export default Card;