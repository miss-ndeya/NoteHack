import React from "react";

const Input = ({ placeholder, type, name, value, onChange, className }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      required
    />
  );
};

export default Input;
