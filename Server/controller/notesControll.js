import Note from '../model/noteModel.js';

// ---------------- CREATE NOTE ----------------
const createNote = async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
        });

        const savedNote = await note.save();
        res.status(201).json({
            message: "Note created successfully",
            note: savedNote
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ---------------- GET ALL NOTES ----------------
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({ isDeleted: false });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: "Error fetching notes" });
    }
};

// ---------------- UPDATE NOTE ----------------
const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const { title, content } = req.body;

        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            { title, content, $inc: { updateCount: 1 } },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.json({
            message: "Note updated successfully",
            note: updatedNote
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ---------------- DELETE NOTE (SOFT DELETE) ----------------
const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;

        const deletedNote = await Note.findByIdAndUpdate(
            noteId,
            { isDeleted: true },
            { new: true }
        );

        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.json({
            message: "Note deleted successfully",
            note: deletedNote
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ---------------- GET DELETED NOTES ----------------
const getDeletedNotes = async (req, res) => {
    try {
        const deletedNotes = await Note.find({ isDeleted: true });
        res.status(200).json(deletedNotes);
    } catch (error) {
        res.status(500).json({ error: "Error fetching deleted notes" });
    }
};

export {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote,
    getDeletedNotes
};
