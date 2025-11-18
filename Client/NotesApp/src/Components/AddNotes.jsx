import { useState } from 'react';

function AddNotes({ onAddNote }) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');  // this is actually content

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim() && note.trim()) {
            // send correct field names to backend
            onAddNote({ title, content: note });
            setTitle('');
            setNote('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-100"
        >
            <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Create New Note</h3>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter note title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-semibold text-lg transition-all duration-200"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your note here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32 transition-all duration-200"
                />
            </div>

            <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-bold shadow-md hover:shadow-lg transform hover:scale-105"
            >
                ✓ Add Note
            </button>
        </form>
    );
}

export default AddNotes;
