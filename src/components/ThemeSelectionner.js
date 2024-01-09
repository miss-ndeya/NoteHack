import React from "react";
import Button from "./Button";
import { useNoteContext } from "../contextes/NotesContext";

const ThemeSelectionner = () => {
  const { changerDeTheme, buttonPadding, handlePaddingChange } =
    useNoteContext();
  const handleClick = (theme) => {
    changerDeTheme(theme);
    handlePaddingChange(3);
  };

  const themes = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6"];

  return (
    <div>
      {themes.map((theme) => (
        <Button
        key={theme}
          className={`p-${buttonPadding} p-2 ${theme} rounded-circle btn me-1`}
          onClick={() => handleClick(theme)}
        />
      ))}
    </div>
  );
};

export default ThemeSelectionner;
