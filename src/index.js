import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NoteState from "./context/note/noteState";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Addnote from "./components/Addnote";
// import Yournote from "./components/Yournote";
// import Notes from "./components/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NoteState>
          <App />
       {/* <Notes/> */}
       {/* <Addnote/> */}
        </NoteState>
      </>
      
    ),
  },
  {
    path: "navbar",
    element: (
      <NoteState>
        <Navbar />
      </NoteState>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Navbar />
        <div>About</div>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
