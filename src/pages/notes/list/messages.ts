import { defineMessages, Messages } from 'react-intl';

const definitions = {
  title: {
    id: 'list.title',
    defaultMessage: 'Moje úkoly',
  },
  add: {
    id: 'list.button.add',
    defaultMessage: 'Vytvořit',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
