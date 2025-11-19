import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'https://notes-app-45so.onrender.com',
});

// ----------------- LOAD ALL NOTES -----------------
const fetchNotes = async () => {
  try {
    const res = await fetch(`${BASE_URL}/get-all-notes`);
    const data = await res.json();
    setNotes(data);
  } catch (error) {
    console.error("Error fetching notes:", error);
  }
};

useEffect(() => {
  fetchNotes();
}, []);

// ----------------- ADD NOTE -----------------
const addNote = async (note) => {
  try {
    const res = await fetch(`${BASE_URL}/create-note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    if (!res.ok) throw new Error("Error creating note");

    await fetchNotes(); // Refresh notes from backend
  } catch (error) {
    console.error("Create Note Error:", error);
  }
};

// ----------------- DELETE NOTE -----------------
const deleteNote = async (noteId) => {
  try {
    const res = await fetch(`${BASE_URL}/delete-note/${noteId}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Error deleting note");

    await fetchNotes();
  } catch (error) {
    console.error("Delete Note Error:", error);
  }
};

// ----------------- EDIT NOTE -----------------
const editNote = async (noteId) => {
  const note = notes.find((n) => (n._id ?? n.id) === noteId);

  if (!note) {
    alert("Note not found");
    return;
  }

  const newTitle = prompt("Edit title", note.title);
  if (newTitle === null) return;

  const newContent = prompt("Edit content", note.content);
  if (newContent === null) return;

  try {
    const res = await fetch(`${BASE_URL}/update-note/${noteId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });

    if (!res.ok) throw new Error("Error updating note");

    await fetchNotes();
  } catch (error) {
    console.error("Update Note Error:", error);
  }
};

export default api; {
  fetchNotes,
  addNote,
  deleteNote,
  editNote
}
