import React, { useState, useEffect } from 'react';

const EditNotes = ({ note, onUpdate }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...note, title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <button 
        type="submit"
        className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
      >
        Update Note
      </button>
    </form>
  );
};

export default EditNotes;
