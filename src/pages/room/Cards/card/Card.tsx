import React, { FC } from "react";
import "./card.css";
import { useAppDispatch } from "../../../../hooks/hooks";
import { userSlice } from "../../../../store/reducers/UserSlice";

interface CardProps {
  fibNumber: number;
}

const Card: FC<CardProps> = ({ fibNumber }) => {
  const { setScramPoint } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const scramVoter: number = parseInt(event.currentTarget.innerText);
    dispatch(setScramPoint(scramVoter));
  };

  return (
    <button
      className={"card-root"}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        return handleChange(event);
      }}
    >
      {fibNumber}
    </button>
  );
};

export default Card;
