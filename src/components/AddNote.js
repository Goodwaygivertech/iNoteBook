import React, { useState, useContext } from "react";
import NoteContext from "../context/note/noteContext";

const AddNote = () => {
  let context = useContext(NoteContext);
  const { addNotes } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""})

  const handleClick = (e)=>{
      e.preventDefault();
      addNotes(note.title, note.description, note.tag);
      // setNote({title: "", description: "", tag: ""})
    }
    
    const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    
    <>
      {/* hgsdhjfhjghjfgshdg jfgv b  */}
      <div className="container ">
        <form>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Titele Here
            </label>
            <input
              onChange={onChange}
              type="email"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description Here
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Your Tag Here
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
