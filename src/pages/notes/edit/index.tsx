import { Formik } from 'formik';
import * as React from 'react';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import { AlertContext } from '../../../components/alert/context';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoData } from '../../../components/noData';
import { NoteForm } from '../../../components/noteForm';
import { Translated } from '../../../components/translated';
import { notesRequests } from '../../../http/requests';
import { paths } from '../../../router/config';
import { messages } from '../messages';
import { Note } from '../types';
import { NoteEditParams } from './types';

export const NoteEdit = injectIntl<RouteComponentProps<NoteEditParams> & InjectedIntlProps>((
  {
    match,
    history,
    intl: { formatMessage },
  }
) => {
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(false);
  const { alert } = useContext(AlertContext);
  const formikRef = useRef<Formik<Note | undefined>>(null);

  const id = useMemo(() => match.params.noteId, [match.params.noteId]);

  const getNote = useCallback(async () => {
    setLoading(true);
    try {
      const note: Note | undefined = await notesRequests.getNote(id);
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
      if (!editedNote || !editedNote.title) {
        throw new Error(formatMessage(messages.noNoteError));
      }
      await notesRequests.putNote(editedNote);
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
  }, [history, alert, formatMessage]);

  useEffect(() => {
    getNote();
  }, [getNote]);

  return (
    <Card>
      <Card.Header>
        <Translated message={messages.title} />
        <Button onClick={submitNote}>
          <Translated message={messages.submit} />
        </Button>
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
