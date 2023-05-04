const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const Note = require("../modules/Note");
const express = require("express");
const userfetch = require("../middelware/userfetch");
const router = express.Router();
// we rea getting here user notes using this first ROUR-1
router.get("/getnotes", userfetch, async (req, res) => {
  try {
    const note = await Note.find({ user: req.user.id });
    // console.log(req.user.id)
    res.json(note);
  } catch (error) {
    console.error(error);
    res.send("internal error hai");
  }
});

// add the notes here  "POST"

router.post(
  "/addnotes",
  [
    body("title", "hey your pass must be greater then 5").isLength({
      min: 5,
    }),
    body("description", "hey your pass must be greater then 5").isLength({
      min: 5,
    }),
  ],
  userfetch,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description, tag } = req.body;
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      // let noteTitle = await Note.findOne({ title: req.body.title });
      // // console.log(noteTitle)

      // if (noteTitle) {
      //   return res.send("please enter a unic title bro");
      // }

      let savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      res.status(400).send("some error occured in internal");
      console.log(error);
    }
  }
);

// update note here "PUT"
router.put("/updatenote/:id", userfetch, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // Create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    console.log(note.user.toString());
    console.log(req.user.id);

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note }); // here you hava to do some change
  } catch (error) {
    console.error(error.message);
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// here we are going to delete note   "DELETE"

router.delete("/deletenotes/:id", userfetch, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("n0t alowed");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("not fund it seems that its deleted");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ success: " hey its deleted", note: note });
  } catch (error) {
    console.error(error.message);
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
