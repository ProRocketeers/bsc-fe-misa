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
  submit: {
    id: 'noteForm.button.submit',
    defaultMessage: 'Uložit',
  },
  edited: {
    id: 'note.alert.edited',
    defaultMessage: 'Úkol byl úspěšně editován',
  },
  deleted: {
    id: 'note.alert.deleted',
    defaultMessage: 'Úkol byl úspěšně vymazán',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
