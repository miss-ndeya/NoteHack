import React from "react";
import Button from "./Button";

const ThemeSelectionner = ({
  changerDeTheme,
  buttonPadding,
  setButtonPadding,
}) => {
  const handleClick = (theme) => {
    changerDeTheme(theme);
    setButtonPadding(3);
  };

  const themes = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6"];

  return (
    <div>
      {themes.map((theme) => (
        <Button
          key={theme}
          className={`p-${buttonPadding}  ${theme} rounded-circle border-0 btn me-1 bod`}
          onClick={() => handleClick(theme)}
        />
      ))}
    </div>
  );
};

export default ThemeSelectionner;
