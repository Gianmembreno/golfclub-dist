import React from "react";
import Note from "./Note";
// import "./NoteContainer.css";

function NoteContainer({ notes, deleteNote, updateText }) {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const reversedNotes = reverseArray(notes);

  return (
    <div className="note-container">
      <div className="note-container_notes custom-scroll">
        {reversedNotes.length > 0 ? (
          reversedNotes.map((note) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
