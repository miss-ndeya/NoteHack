import React from "react";
import ThemeSelectionner from "./ThemeSelectionner";
import Title from "./Title";

const Header = ({ changerDeTheme, buttonPadding, setButtonPadding }) => {
  return (
    <div className="bg-light p-3 rounded-3 d-flex justify-content-between align-items-center mb-5">
      <Title children="NoteHack" className="fs-5" />
      <ThemeSelectionner
        changerDeTheme={changerDeTheme}
        buttonPadding={buttonPadding}
        setButtonPadding={setButtonPadding}
      />
    </div>
  );
};

export default Header;
