import React, { useState, useContext } from "react";
import NoteContext from "../context/note/noteContext";
import "./style.css";
const Notes = () => {
  let context = useContext(NoteContext);
  const { notes, setnotes } = context;

  return (
    <>
        <h1 className="container my-4  headding">Your Notes Here</h1>

      <div className="doItCenter">

        {notes.map((note) => {
          return (
            <>
              <div className="mycontainer">
                <div className="icons">

            <h5>title↓↓</h5> <i class="fa-solid fa-trash mt-1 mx-2"></i> <i class="fa-solid fa-pen-to-square mt-1 mx-2"></i>
                </div>
                <div className="title">{note.title}</div>
                <h5>des↓↓</h5>
                <div className="des">{note.description}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
