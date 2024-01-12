import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Note from "../components/Note";

function NoteHackContainer() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [note, setNote] = useState("");
  const [buttonPadding, setButtonPadding] = useState(2);
  const [backgroundColor, setBackgroundColor] = useState(
    JSON.parse(localStorage.getItem("backgroundColor")) || "btn-1"
  );
  const [modifierId, setModifierId] = useState(false);

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("backgroundColor", JSON.stringify(backgroundColor));
  }, [notes, backgroundColor]);

  const addNote = () => {
    if (note.trim()) {
      if (modifierId !== false) {
        const updatedNotes = notes.map((noteModif) =>
          noteModif.id === modifierId ? { ...noteModif, note: note } : noteModif
        );
        setNotes(updatedNotes);
        setModifierId(false);
        setNote("");
      } else {
        const newNote = {
          id: Math.random(),
          note: note,
          date: new Date().toLocaleString(),
        };
        setNotes([...notes, newNote]);
        setNote("");
      }
    }
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    if (modifierId === id) {
      setModifierId(false);
      setNotes(updatedNotes);
      setNote("");
    } else {
      setNotes(updatedNotes);
    }
  };

  const editNote = (id) => {
    const editNote = notes.find((note) => note.id === id);
    setModifierId(id);
    setNote(editNote.note);
  };

  const handleBackgroundColorChange = (theme) => {
    setBackgroundColor(theme);
  };

  const clearAllNotes = () => {
    console.log("Clearing all notes");
    setNotes([]);
  };

  return (
    <div
      className={`App ${backgroundColor} pt-sm-5 pt-md-4 p-4 px-3 px-md-4 min-vh-100 `}
    >
      <Header
        changerDeTheme={handleBackgroundColorChange}
        buttonPadding={buttonPadding}
        setButtonPadding={setButtonPadding}
      />
      <Form
        value={note}
        modifierId={modifierId}
        onChange={handleChange}
        handleSubmit={addNote}
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

export default NoteHackContainer;
