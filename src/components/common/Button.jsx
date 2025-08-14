import React from "react";

const Button = ({ title, variant = "primary", onClick }) => {
  return (
    <button
      className={`${
        variant === "primary" ? "bg-green-500 text-white" : "border border-green-600"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
