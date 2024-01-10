import React from "react";
import NoteListe from "./NoteListe";
import HeaderNote from "./HeaderNote";

const Note = ({ notes, removeNote, updateNote, clearAll, editNote }) => {
  const nombreNotes = notes.length;
  return (
    <div className="bg-light p-3 py-4 pb-5 rounded-3 ">
      <HeaderNote nombreNotes={nombreNotes} clearAll={clearAll} />
      <NoteListe
        notes={notes}
        removeNote={removeNote}
        editNote={editNote}
        updateNote={updateNote}
      />
    </div>
  );
};

export default Note;
