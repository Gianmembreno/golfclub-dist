import React, { useState } from "react";
import "./SwingThoughts.css";

function SwingThoughts() {
  const [notes, setNotes] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setNewNote("");
    setIsPopupOpen(false);
  };

  return (
    <div className="swing-thoughts-container">
      <div className="notes-grid">
        {notes.map((note, index) => (
          <div key={index} className="note">
            {note}
          </div>
        ))}
        <div className="add-note" onClick={() => setIsPopupOpen(true)}>
          <span>+</span>
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add a new note</h2>
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Enter your note here..."
            />
            <button onClick={handleAddNote}>Add Note</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SwingThoughts;
