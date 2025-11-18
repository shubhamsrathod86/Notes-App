import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">📭 No notes available</p>
          <p className="text-gray-500 text-sm mt-2">Create your first note to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, i) => (
            <NoteItem
              key={note.id ?? note._id ?? i}
              note={note}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}

        </div>
      )}
    </div>
  );
};

export default NotesList;