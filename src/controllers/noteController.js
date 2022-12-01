const note = require("../models/note");
const noteModel = require("../models/note");

const createNote = async (req, res) => {
  const { title, description } = req.body;

  const newNote = noteModel({
    title: title,
    description: description,
    userId: req.userId,
  });
  try {
    await newNote.save();
    res.status(201).json(newNote);
    console;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const newNote = {
    title,
    description,
    userId: req.userId,
  };
  try {
    await noteModel.findByIdAndUpdate(id, newNote, { new: true });
    res.status(200).json(newNote);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await noteModel.findByIdAndDelete(id);
    res.status(202).json(note);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

const getNotes = async (req, res) => {
  try {
    //console.log(req,"req.userId");

    const notes = await noteModel.find({ userId: req.userId });
    res.status(200).json(notes);
    console.log(notes, "notes");
    //console.log(userId,"req.userId");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went Wrong" });
  }
};

module.exports = {
  createNote,
  deleteNote,
  updateNote,
  getNotes,
};
