import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Card, ProgressBar, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from '../../../components/loadingIndicator';
import { Notes } from '../../../components/notes';
import { Translated } from '../../../components/translated';
import { paths } from '../../../router/config';
import { Note } from '../types';
import axios from 'axios';
import { messages } from './messages';
import './styles.scss';

export const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  const getNotes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://private-9aad-note10.apiary-mock.com/notes');
      const notes: Note[] = response.data;
      setNotes(notes);
      setLoading(false);
    } catch (e) {
      setNotes([]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Card className="notesListContainer">
      <Card.Header>
        <Translated message={messages.title} />
        <Link to={paths.create}>
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
