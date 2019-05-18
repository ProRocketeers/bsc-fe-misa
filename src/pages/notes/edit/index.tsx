import axios from 'axios';
import { Formik } from 'formik';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { WithAlert } from '../../../components/alert/types';
import { withAlert } from '../../../components/alert/withAlert';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoData } from '../../../components/noData';
import { NoteForm } from '../../../components/noteForm';
import { Translated } from '../../../components/translated';
import { HOST_URL } from '../../../constants';
import { paths } from '../../../router/config';
import { Note } from '../types';
import { messages } from './messages';
import { NoteEditParams } from './types';

export const NoteEdit = withAlert<RouteComponentProps<NoteEditParams> & WithAlert>(({ match, history, alert }) => {
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(false);
  const formikRef = useRef<Formik<Note | undefined>>(null);

  const id = useMemo(() => match.params.noteId, [match.params.noteId]);

  const getNote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${HOST_URL}/notes/${id}`);
      const note: Note = response.data;
      setNote(note);
      setLoading(false);
    } catch (e) {
      setNote(undefined);
      setLoading(false);
      alert({
        variant: 'danger',
        message: e.message,
      });
    }
  }, [id, alert]);

  const submitNote = useCallback(() => {
    if (formikRef.current) {
      formikRef.current.executeSubmit();
    }
  }, [formikRef]);

  const editNote = useCallback(async (editedNote?: Note) => {
    setLoading(true);
    try {
      await axios.put<Note>(`${HOST_URL}/notes/${id}`, editedNote);
      setLoading(false);
      history.push(paths.list);
      alert({
        variant: 'success',
        message: <Translated message={messages.edited} />
      });
    } catch (e) {
      setLoading(false);
      alert({
        variant: 'danger',
        message: e.message,
      });
    }
  }, [id, history, alert]);

  const deleteNote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${HOST_URL}/notes/${id}`);
      const note: Note = response.data;
      setNote(note);
      setLoading(false);
      history.push(paths.list);
      alert({
        variant: 'success',
        message: <Translated message={messages.deleted} />
      });
    } catch (e) {
      setLoading(false);
      alert({
        variant: 'danger',
        message: e.message,
      });
    }
  }, [id, history, alert]);

  useEffect(() => {
    getNote();
  }, [getNote]);

  return (
    <Card>
      <Card.Header>
        <Translated message={messages.title} />
        <div>
          <Button variant="danger" onClick={deleteNote} style={{ marginRight: '1rem' }}>
            <Translated message={messages.delete} />
          </Button>
          <Button onClick={submitNote}>
            <Translated message={messages.submit} />
          </Button>
        </div>
      </Card.Header>
      {
        note
          ? <NoteForm formikRef={formikRef} initialValue={note} onSubmit={editNote} />
          : <NoData />
      }
      <LoadingIndicator loading={loading} />
    </Card>
  );
});
