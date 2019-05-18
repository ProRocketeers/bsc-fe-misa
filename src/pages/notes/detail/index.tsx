import axios from 'axios';
import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { NoData } from '../../../components/noData';
import { Translated } from '../../../components/translated';
import { HOST_URL } from '../../../constants';
import { paths } from '../../../router/config';
import { Note } from '../types';
import { messages } from './messages';
import { NoteDetailParams } from './types';

export const NoteDetail: React.FC<RouteComponentProps<NoteDetailParams>> = ({ match, history }) => {
  const [note, setNote] = useState<Note | undefined>();
  const [loading, setLoading] = useState(false);

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
    }
  }, [id]);

  const deleteNote = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${HOST_URL}/notes/${id}`);
      const note: Note = response.data;
      setNote(note);
      setLoading(false);
      history.push(paths.list);
    } catch (e) {
      setLoading(false);
    }
  }, [id, history]);

  useEffect(() => {
    getNote();
  }, [getNote]);

  return (
    <Card>
      <Card.Header>
        <Translated message={messages.title} />
        <div>
          <Link to={`${paths.edit_noParam}${id}`} style={{ marginRight: '1rem' }}>
            <Button>
              <Translated message={messages.edit} />
            </Button>
          </Link>
          <Button variant="danger" onClick={deleteNote}>
            <Translated message={messages.delete} />
          </Button>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        {
          note
            ? <ListGroup.Item>{note.title}</ListGroup.Item>
            : <NoData />
        }
      </ListGroup>
      <LoadingIndicator loading={loading} />
    </Card>
  );
};
