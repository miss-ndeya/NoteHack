import React from "react";
import { NoteContextProvider } from "./contextes/NotesContext";
import NoteHackContainer from "./pages/NoteHackContainer";

function App() {
  return (
    <NoteContextProvider>
      <NoteHackContainer />
    </NoteContextProvider>
  );
}

export default App;
