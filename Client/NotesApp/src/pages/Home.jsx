import React from 'react';
import AddNotes from '../Components/AddNotes';
import NotesList from '../Components/NotesList';
import useNotes from '../hooks/useNotes';

const Home = () => {
    const { notes, addNote, deleteNote, editNote } = useNotes();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-3">📝 Notes Application</h1>
                    <p className="text-gray-300 text-lg">Organize your thoughts and ideas effortlessly</p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <AddNotes onAddNote={addNote} />
                    <hr className="my-8 border-gray-200" />
                    <NotesList notes={notes} onDelete={deleteNote} onEdit={editNote} />
                </div>
            </div>
        </div>
    );
};

export default Home;