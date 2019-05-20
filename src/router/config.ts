import { RouteProps } from 'react-router';
import { NoteCreate } from '../pages/notes/create';
import { NoteDetail } from '../pages/notes/detail';
import { NoteEdit } from '../pages/notes/edit';
import { NotesList } from '../pages/notes/list';
import { NotFound } from '../pages/notFound';

export const paths = {
  default: '/',
  list: '/',
  detail: '/detail/:noteId',
  detailNoParam: '/detail/',
  create: '/new',
  edit: '/edit/:noteId',
  editNoParam: '/edit/',
};

export const routes: RouteProps[] = [
  {
    path: paths.default,
    component: NotesList,
    exact: true,
  },
  {
    path: paths.list,
    component: NotesList,
    exact: true,
  },
  {
    path: paths.detail,
    component: NoteDetail,
  },
  {
    path: paths.create,
    component: NoteCreate,
  },
  {
    path: paths.edit,
    component: NoteEdit,
  },
  {
    path: undefined,
    component: NotFound,
  },
];
