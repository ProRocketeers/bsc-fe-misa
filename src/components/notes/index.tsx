import * as R from 'ramda';
import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Note } from '../../pages/notes/types';
import { Translated } from '../translated';
import { messages } from './messages';
import './styles.scss';
import { NotesListProps } from './types';

export const Notes: React.FC<NotesListProps> = ({ notes }) => (
  <ListGroup variant="flush" className="notes">
    {
      notes.length
        ? R.map((note: Note) => (
          <ListGroup.Item className="note" key={`note-${note.id}`}>
            {note.title}
          </ListGroup.Item>
        ), notes)
        : (
          <div className="noData">
            <Translated message={messages.noData} />
          </div>
        )
    }
  </ListGroup>
);
