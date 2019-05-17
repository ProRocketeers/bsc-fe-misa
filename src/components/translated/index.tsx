import * as React from 'react';
import { InjectedIntlProps, injectIntl, FormattedMessage } from 'react-intl';

interface TranslatedProps extends InjectedIntlProps {
  message: FormattedMessage.MessageDescriptor;
}

export const Translated = injectIntl((
  {
    intl: { formatMessage },
    message,
  }: TranslatedProps,
) => {
  return (
    <>
      { formatMessage(message) }
    </>
  );
});
