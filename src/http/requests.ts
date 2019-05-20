import axios from 'axios';
import { Note } from '../pages/notes/types';
import { NotesRequests } from './types';

export const HOST_URL = 'http://private-9aad-note10.apiary-mock.com';

export const notesRequests: NotesRequests = {
  getNotes: async (): Promise<Note[] | undefined> => {
    const response = await axios.get<Note[]>(`${HOST_URL}/notes`);
    return response.data;
  },
  getNote: async (id: string): Promise<Note | undefined> => {
    const response = await axios.get<Note>(`${HOST_URL}/notes/${id}`);
    return response.data;
  },
  postNote: async (note: Note): Promise<Note | undefined> => {
    const response = await axios.post<Note>(`${HOST_URL}/notes`, note);
    return response.data;
  },
  putNote: async (note: Note): Promise<Note | undefined> => {
    const response = await axios.put<Note>(`${HOST_URL}/notes/${note.id}`, note);
    return response.data;
  },
  deleteNote: async (id: string): Promise<string> => {
    await axios.delete(`${HOST_URL}/notes/${id}`);
    return id;
  }
};
