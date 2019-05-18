import { defineMessages, Messages } from 'react-intl';

const definitions = {
  titleFiled: {
    id: 'noteForm.field.title',
    defaultMessage: 'Název',
  },
  submit: {
    id: 'noteForm.button.submit',
    defaultMessage: 'Uložit',
  },
};

type Names = keyof typeof definitions;

export const messages: Messages<Names> = defineMessages(definitions);
