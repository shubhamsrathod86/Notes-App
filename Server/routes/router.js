import { Router } from 'express';
import {createNote, getAllNotes, updateNote, deleteNote, getDeletedNotes} from '../controller/notesControll.js';

const noteRouter = Router();

noteRouter.get('/get-all-notes',getAllNotes);

noteRouter.post('/create-note',createNote);

noteRouter.patch('/update-note/:id',updateNote);

noteRouter.delete('/delete-note/:id',deleteNote);

noteRouter.get('/get-deleted-notes',getDeletedNotes);

export default noteRouter;