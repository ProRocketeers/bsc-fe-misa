import { defineMessages, Messages } from 'react-intl';

const definitions = {
  title: {
    id: 'note.title',
    defaultMessage: 'Úkol',
  },
  create: {
    id: 'note.button.create',
    defaultMessage: 'Vytvořit',
  },
  created: {
    id: 'note.alert.created',
    defaultMessage: 'Úkol byl úspěšně vytvořen',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
