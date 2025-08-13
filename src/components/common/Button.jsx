import React from "react";

const Button = ({ title, variant = "primary" }) => {
  return (
    <button
      className={`${variant === "primary" ? "bg-green-500" : "border border-green-600"}`}
    >
      {title}
    </button>
  );
};

export default Button;
