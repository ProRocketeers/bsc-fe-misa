import { defineMessages, Messages } from 'react-intl';

const definitions = {
  title: {
    id: 'note.title',
    defaultMessage: 'Úkol',
  },
  edit: {
    id: 'note.button.edit',
    defaultMessage: 'Editovat',
  },
  delete: {
    id: 'note.button.delete',
    defaultMessage: 'Smazat',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
