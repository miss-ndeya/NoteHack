import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Note from "./components/Note";
import { NoteContextProvider, useNoteContext } from "./contextes/NotesContext";

function App() {
  return (
    <NoteContextProvider>
      <AppContainer />
    </NoteContextProvider>
  );
}

function AppContainer() {
  const {
    notes,
    note,
    modifierId,
    background,
    ajoutNote,
    removeNote,
    editNote,
    clearAllNotes,
    handleChange,
    handleBackgroundChange,
  } = useNoteContext();

  return (
    <div className={`${background} pt-3 p-4 min-vh-100 `}>
      <Header
        changerDeTheme={handleBackgroundChange}
        buttonPadding={2}
        setButtonPadding={() => {}}
      />
      <Form
        value={note}
        modifierId={modifierId}
        onChange={handleChange}
        handleSubmit={ajoutNote}
      />
      <Note
        notes={notes}
        removeNote={removeNote}
        clearAll={clearAllNotes}
        editNote={editNote}
      />
    </div>
  );
}

export default App;
