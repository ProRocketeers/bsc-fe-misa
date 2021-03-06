import axios from 'axios';
import * as React from 'react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AlertContext } from '../../../components/alert/context';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { Notes } from '../../../components/notes';
import { Translated } from '../../../components/translated';
import { HOST_URL } from '../../../http/requests';
import { paths } from '../../../router/config';
import { Note } from '../types';
import { messages } from './messages';

export const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const { alert } = useContext(AlertContext);

  const getNotes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${HOST_URL}/notes`);
      const notes: Note[] = response.data;
      setNotes(notes);
      setLoading(false);
    } catch (e) {
      setNotes([]);
      setLoading(false);
      alert({
        variant: 'danger',
        message: e.message,
      });
    }
  }, [alert]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <Card>
      <Card.Header>
        <Translated message={messages.title} />
        <Link to={paths.create} id="create">
          <Button>
            <Translated message={messages.add} />
          </Button>
        </Link>
      </Card.Header>
      <Notes notes={notes} />
      <LoadingIndicator loading={loading} />
    </Card>
  );
};
