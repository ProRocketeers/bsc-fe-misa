import * as React from 'react';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { AlertContext } from '../../../components/alert/context';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoData } from '../../../components/noData';
import { Spinner } from '../../../components/spinner';
import { Translated } from '../../../components/translated';
import { notesRequests } from '../../../http/requests';
import { paths } from '../../../router/config';
import { messages } from '../messages';
import { Note } from '../types';
import { NoteDetailParams } from './types';

export const NoteDetail: React.FC<RouteComponentProps<NoteDetailParams>> = ({ match, history }) => {
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(true);
  const { alert } = useContext(AlertContext);

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

  const deleteNote = useCallback(async () => {
    setLoading(true);
    try {
      await notesRequests.deleteNote(id);
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
          <Link to={`${paths.edit_noParam}${id}`}>
            <Button>
              <Translated message={messages.edit} />
            </Button>
          </Link>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        {
          loading
            ? <Spinner loading />
            : <ListGroup.Item>{note ? note.title : <NoData />}</ListGroup.Item>
        }
      </ListGroup>
      <LoadingIndicator loading={loading} />
    </Card>
  );
};
