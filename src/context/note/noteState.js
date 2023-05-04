import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
import Notes from "../../components/Notes";
// import Navbar from "../../components/Navbar";

const NoteState = (props) => {
  let notemain = []
  const [notes, setnotes] = useState(notemain);

  const addNotes = (title, description, tag) => {
    const note = {
      _id: "644e3ca079b1trc4dfc24872d0",
      user: "644ce87427acea0d44adbc22",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    console.log("adding the note");
    let ok = notemain.concat(note)
    setnotes(ok);
  };

  return (
    <NoteContext.Provider
      value={{ notes: notes, setnotes: setnotes, addNotes: addNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
