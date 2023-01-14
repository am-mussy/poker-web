import React, { FC } from "react";
import "./popup.css";
interface ErrorPopupProps {
  text: string;
}

const ErrorPopup: FC<ErrorPopupProps> = ({ text }) => {
  return (
    <div className="modal-window">
      <div>
        <a href="#" title="Close" className="modal-close">
          Close
        </a>
        <h1>Voilà!</h1>
        <div>
          A CSS-only modal based on the :target pseudo-class. Hope you find it
          helpful.
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
