import React from "react";
import EditNotes from "./EditNotes";

const EditNoteModel = ({ isOpen, note, onClose, onUpdate }) => {
    if (!isOpen || !note) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">
                    Edit Note
                </h2>

                {/* Your existing form component */}
                <EditNotes note={note} onUpdate={onUpdate} />
            </div>
        </div>
    );
};

export default EditNoteModel;
