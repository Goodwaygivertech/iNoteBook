import "./App.css";
// import Addnote from "./components/Addnote";

import Navbar from "./components/Navbar";

import { Link } from "react-router-dom";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";

function App() {
  let name = "harry shivam";
  return (
    <>
      <Navbar />
<AddNote/>
      <Notes />
    </>
  );
}

export default App;
