import { defineMessages, Messages } from 'react-intl';

const definitions = {
  noData: {
    id: 'notes.noData',
    defaultMessage: 'Nebyly nalezeny žádné úkoly',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
