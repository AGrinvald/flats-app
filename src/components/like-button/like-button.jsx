import React from "react";

import "./like-button.scss";

export default function LikeButton({ onClick, className = "", children }) {
  return (
    <button onClick={onClick} className={`like-button ${className}`}>
      {children}
    </button>
  );
}
