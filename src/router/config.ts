import { RouteProps } from 'react-router';
import { NoteCreate } from '../pages/create';
import { NoteDetail } from '../pages/detail';
import { NoteEdit } from '../pages/edit';
import { NotesList } from '../pages/list';
import { NotFound } from '../pages/notFound';

export const paths = {
  default: '/',
  list: '/',
  detail: '/detail/:noteId',
  create: '/new',
  edit: '/edit/:noteId',
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
