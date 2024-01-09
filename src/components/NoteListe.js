import React from "react";
import Card from "./Card";
import { useNoteContext } from "../contextes/NotesContext";

const NoteListe = () => {
  const { notes, removeNote, editNote } = useNoteContext();
  return (
    <div className="row gy-4 pt-4 p-3">
      {notes.map((note) => (
        <Card
          key={note.id}
          note={note}
          removeNote={removeNote}
          editNote={editNote}
          // updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NoteListe;
