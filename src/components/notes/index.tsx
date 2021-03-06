import * as R from 'ramda';
import * as React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Note } from '../../pages/notes/types';
import { paths } from '../../router/config';
import { NoData } from '../noData';
import './styles.scss';
import { NotesListProps } from './types';

export const Notes: React.FC<NotesListProps> = ({ notes = [] }) => (
  <ListGroup variant="flush" className="notes">
    {
      notes.length
        ? R.map((note: Note) => (
          <ListGroup.Item key={`note-${note.id}`} action>
            <Link to={`${paths.detailNoParam}${note.id}`}>
              {note.title}
            </Link>
          </ListGroup.Item>
        ), notes)
        : <NoData />
    }
  </ListGroup>
);
