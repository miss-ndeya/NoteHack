import React, { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [note, setNote] = useState("");
  const [modifierId, setModifierId] = useState(false);
  const [background, setBackground] = useState( JSON.parse(localStorage.getItem("background")) || "btn-1");
  const [buttonPadding, setButtonPadding] = useState(2);

  const changerDeTheme = (theme) => {
    setBackground(theme);
  };

  const handlePaddingChange = (num) => {
    setButtonPadding(num);
  };

  const ajoutNote = () => {
    if (note.trim()) {
      if (modifierId !== false) {
        const modifierNotes = notes.map((noteModif) =>
          noteModif.id === modifierId ? { ...noteModif, note: note } : noteModif
        );

        setNotes(modifierNotes);
        setModifierId(false);
        setNote("");
      } else {
        const newNote = {
          id: Math.random(),
          note: note,
          date: new Date().toDateString(),
        };

        setNotes([...notes, newNote]);
        setNote("");
      }
    }
  };

  const removeNote = (id) => {
    const notesModifier = notes.filter((note) => note.id !== id);

    if (modifierId === id) {
      setModifierId(false);
      setNotes(notesModifier);
      setNote("");
    } else {
      setNotes(notesModifier);
    }
  };

  const editNote = (id) => {
    const editNote = notes.find((note) => note.id === id);
    setModifierId(id);
    setNote(editNote.note);
  };

  const clearAllNotes = () => {
    setNotes([]);
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleBackgroundChange = (color) => {
    setBackground(color);
  };

  const value = {
    notes,
    note,
    modifierId,
    background,
    buttonPadding,
    ajoutNote,
    removeNote,
    editNote,
    clearAllNotes,
    handleChange,
    handleBackgroundChange,
    changerDeTheme,
    handlePaddingChange,
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("background", JSON.stringify(background));
  }, [notes, background]);

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
