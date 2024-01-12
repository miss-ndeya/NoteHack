import React from "react";
import Card from "./Card";

const NoteListe = ({ notes, removeNote, editNote }) => {
  return (
    <div className="row justify-content-center gy-4 pt-4 p-3">
      {notes.map((note) => (
        <Card
          key={note.id}
          note={note}
          removeNote={removeNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default NoteListe;
