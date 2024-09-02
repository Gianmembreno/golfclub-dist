import React from "react";
import { IoMdTrash } from "react-icons/io";
// import "./Note.css";

let timer = 500,
  timeout;

function Note({ note, deleteNote, updateText }) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    const amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;

    const min = date.getMinutes().toString().padStart(2, "0");

    const day = date.getDate();

    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const handleTextChange = (text) => {
    debounce(() => updateText(text, note.id));
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note_text"
        defaultValue={note.text}
        onChange={(event) => handleTextChange(event.target.value)}
      />
      <div className="note_footer">
        <p>{formatDate(note.time)}</p>
        <IoMdTrash size={24} onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
}

export default Note;
