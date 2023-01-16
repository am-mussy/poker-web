import React from "react";
import "./neuButton.css";

type NeuButtonProps = {
  name: string;
  onClick: () => void;
};

const NeuButton = ({ name, onClick }: NeuButtonProps) => {
  return (
    <button className={"btn"} onClick={onClick}>
      {name}
    </button>
  );
};

export default NeuButton;
