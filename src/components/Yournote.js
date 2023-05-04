import React, { useState, useContext } from "react";
// import noteContext from "../context/note/noteContext";

const Yournote = (props) => {
  // const { note } = props;
  // console.log(note);
  // let context = useContext(noteContext)
  // const {notes ,setnotes} = context;
  const {notes} = props;
  console.log(notes)

  return (
    <>
      <h1 className="container my-4  headding">Your Notes Here</h1>

      <div className="container">

        {notes.title}
      {/* {notes.map((note) => {
        return( 
        <> 
        {note.title}
        {console.log("hey map is working")}
        </>
        );
      })} */}
      </div>
    </>
  );
};

export default Yournote;
