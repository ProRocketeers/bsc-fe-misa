import { Note } from '../pages/notes/types';

export interface NotesRequests {
  getNotes: () => Promise<Note[] | undefined>;
  getNote: (id: string) => Promise<Note | undefined>;
  postNote: (note: Note) => Promise<Note | undefined>;
  putNote: (note: Note) => Promise<Note | undefined>;
  deleteNote: (id: string) => Promise<string>;
}
