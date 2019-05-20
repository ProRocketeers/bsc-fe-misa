import { Formik } from 'formik';
import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RouteComponentProps } from 'react-router-dom';
import { WithAlert } from '../../../components/alert/types';
import { withAlert } from '../../../components/alert/withAlert';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoteForm } from '../../../components/noteForm';
import { Translated } from '../../../components/translated';
import { notesRequests } from '../../../http/requests';
import { paths } from '../../../router/config';
import { Note } from '../types';
import { messages } from '../messages';

export const NoteCreate = injectIntl(withAlert<RouteComponentProps & WithAlert & InjectedIntlProps>((
  {
    history,
    alert,
    intl: { formatMessage },
  }
  ) => {
  const [loading, setLoading] = useState(false);
  const formikRef = useRef<Formik<Note | undefined>>(null);

  const submitNote = useCallback(() => {
    if (formikRef.current) {
      formikRef.current.executeSubmit();
    }
  }, [formikRef]);

  const createNote = useCallback(async (note?: Note) => {
    setLoading(true);
    try {
      if (!note || !note.title) {
        throw new Error(formatMessage(messages.noNoteError));
      }
      await notesRequests.postNote(note);
      setLoading(false);
      alert({
        variant: 'success',
        message: <Translated message={messages.created} />
      });
      history.push(paths.default);
    } catch (e) {
      setLoading(false);
      alert({
        variant: 'danger',
        message: e.message,
      });
    }
  }, [history, alert, formatMessage]);

  return (
    <Card>
      <Card.Header>
        <Translated message={messages.title} />
        <Button onClick={submitNote}>
          <Translated message={messages.create} />
        </Button>
      </Card.Header>
      <NoteForm formikRef={formikRef} onSubmit={createNote} />
      <LoadingIndicator loading={loading} />
    </Card>
  );
}));
