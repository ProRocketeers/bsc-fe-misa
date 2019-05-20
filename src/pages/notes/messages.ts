import { defineMessages, Messages } from 'react-intl';

const definitions = {
  title: {
    id: 'note.title',
    defaultMessage: 'Úkol',
  },
  submit: {
    id: 'noteForm.button.submit',
    defaultMessage: 'Uložit',
  },
  create: {
    id: 'note.button.create',
    defaultMessage: 'Vytvořit',
  },
  created: {
    id: 'note.alert.created',
    defaultMessage: 'Úkol byl úspěšně vytvořen',
  },
  edit: {
    id: 'note.button.edit',
    defaultMessage: 'Editovat',
  },
  edited: {
    id: 'note.alert.edited',
    defaultMessage: 'Úkol byl úspěšně editován',
  },
  delete: {
    id: 'note.button.delete',
    defaultMessage: 'Smazat',
  },
  deleted: {
    id: 'note.alert.deleted',
    defaultMessage: 'Úkol byl úspěšně vymazán',
  },
  noNoteError: {
    id: 'note.error.noNote',
    defaultMessage: 'Nelze uložit prázdný úkol',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
