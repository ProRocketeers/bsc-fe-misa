import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Notes } from '../../../components/notes';
import { Translated } from '../../../components/translated';
import { paths } from '../../../router/config';
import { messages } from './messages';
import './styles.scss';

export const NotesList: React.FC = () => {
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
      <Notes notes={[]} />
    </Card>
  );
};
