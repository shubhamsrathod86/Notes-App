import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
    // prefer MongoDB's _id, fallback to id (if ever present)
    const noteId = note._id ?? note.id;

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{note.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>

            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => onEdit(noteId)}
                    className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold text-sm"
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() => {
                        // optional confirmation to avoid accidental deletes
                        if (window.confirm('Delete this note?')) onDelete(noteId);
                    }}
                    className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-semibold text-sm"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default NoteItem;
