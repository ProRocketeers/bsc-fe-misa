import { defineMessages, Messages } from 'react-intl';

const definitions = {
  title: {
    id: 'header.title',
    defaultMessage: 'Úkoly',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
