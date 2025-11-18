import { useEffect, useState } from 'react';
import AddNotes from './Components/AddNotes.jsx';
import NotesList from './Components/NotesList.jsx';
import EditNoteModel from './Components/EditNoteModel.jsx';

import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const BASE_URL = "http://localhost:3000/note";

  const fetchNotes = async () => {
    const res = await fetch(`${BASE_URL}/get-all-notes`);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    await fetch(`${BASE_URL}/create-note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`${BASE_URL}/delete-note/${id}`, { method: "DELETE" });
    fetchNotes();
  };

  const editNote = (id) => {
    const note = notes.find(n => n._id === id);
    setSelectedNote(note);
    setIsEditing(true);
  };

  const updateNote = async (updatedNote) => {
    await fetch(`${BASE_URL}/update-note/${updatedNote._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedNote.title,
        content: updatedNote.content,
      }),
    });

    setIsEditing(false);
    setSelectedNote(null);
    fetchNotes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-12 px-4">

      {/* Header */}
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg mb-12">
        📝 Notes App
      </h1>

      {/* Add Note */}
      <div className="w-full max-w-lg mb-12">
        <AddNotes onAddNote={addNote} />
      </div>

      {/* Notes List */}
      <NotesList notes={notes} onEdit={editNote} onDelete={deleteNote} />

      {/* Edit Modal */}
      <EditNoteModel
        isOpen={isEditing}
        note={selectedNote}
        onClose={() => setIsEditing(false)}
        onUpdate={updateNote}
      />
    </div>
  );
}

export default App;
