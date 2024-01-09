import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Note from "./components/Note";
import { NoteContextProvider, useNoteContext } from "./contextes/NotesContext";

function App() {
  return (
    <NoteContextProvider>
      <AppContainer/>
    </NoteContextProvider>
  )
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

// function App() {
//   const [notes, setNotes] = useState(
//     JSON.parse(localStorage.getItem("notes")) || []
//   );
//   const [note, setNote] = useState("");
//   const [buttonPadding, setButtonPadding] = useState(2);
//   const [backgroundColor, setBackgroundColor] = useState(
//     JSON.parse(localStorage.getItem("backgroundColor")) || "btn-1"
//   );
//   const [modifierId, setmodifierId] = useState(false);

//   const handleChange = (e) => {
//     setNote(e.target.value);
//   };

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//     localStorage.setItem("backgroundColor", JSON.stringify(backgroundColor));
//   }, [notes, backgroundColor]);

//   const addNote = () => {
//     if (note.trim()) {
//       if (modifierId !== false) {
//         const updatedNotes = notes.map((noteModif) =>
//           noteModif.id === modifierId ? { ...noteModif, note: note } : noteModif
//         );
//         setNotes(updatedNotes);
//         setmodifierId(false);
//         setNote("");
//       } else {
//         const newNote = {
//           id: Math.random(),
//           note: note,
//           date: new Date().toLocaleString(),
//         };
//         setNotes([...notes, newNote]);
//         setNote("");
//       }
//     }
//   };

//   const removeNote = (id) => {
//     const updatedNotes = notes.filter((note) => note.id !== id);
//     if (modifierId === id) {
//       setmodifierId(false);
//       setNotes(updatedNotes);
//       setNote("");
//     } else {
//       setNotes(updatedNotes);
//     }
//   };

//   const editNote = (id) => {
//     const editNote = notes.find((note) => note.id === id);
//     setmodifierId(id);
//     setNote(editNote.note);
//   };

//   const handleBackgroundColorChange = (color) => {
//     setBackgroundColor(color);
//   };

//   const clearAllNotes = () => {
//     setNotes([]);
//   };

//   return (
//     <div className={`App ${backgroundColor} pt-3 p-4 min-vh-100 `}>
//       <Header
//         onThemeChange={handleBackgroundColorChange}
//         buttonPadding={buttonPadding}
//         setButtonPadding={setButtonPadding}
//       />
//       <Form
//         value={note}
//         modifierId={modifierId}
//         onChange={handleChange}
//         handleSubmit={addNote}
//       />
//       <Note
//         notes={notes}
//         removeNote={removeNote}
//         clearAll={clearAllNotes}
//         editNote={editNote}
//       />
//     </div>
//   );
// }

export default App;
