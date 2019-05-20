import axios from 'axios';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { WithAlert } from '../../../components/alert/types';
import { withAlert } from '../../../components/alert/withAlert';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoData } from '../../../components/noData';
import { Spinner } from '../../../components/spinner';
import { Translated } from '../../../components/translated';
import { HOST_URL } from '../../../constants';
import { paths } from '../../../router/config';
import { Note } from '../types';
import { messages } from './messages';
import { NoteDetailParams } from './types';

export const NoteDetail = withAlert<RouteComponentProps<NoteDetailParams> & WithAlert>(({ match, history, alert }) => {
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(true);

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
});
