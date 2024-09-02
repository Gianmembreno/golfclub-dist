import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
// import "./Sidebar.css";

function Sidebar({ addNote }) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <IoMdAdd size={40} onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((color, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: color }}
            onClick={() => addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
