import { Formik } from 'formik';
import * as React from 'react';
import { Note } from '../../pages/notes/types';

export interface NoteFormProps {
  initialValue?: Note;
  onSubmit: (note?: Note) => void;
  formikRef: React.RefObject<Formik<Note | undefined>>;
}
