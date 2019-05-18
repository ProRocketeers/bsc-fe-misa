import { Field, Formik } from 'formik';
import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Translated } from '../translated';
import { messages } from './messages';
import { NoteFormProps } from './types';
import './styles.scss';

export const NoteForm = injectIntl<NoteFormProps & InjectedIntlProps>((
  {
    formikRef,
    initialValue,
    onSubmit,
    intl: { formatMessage },
  }
) => {
  return (
    <div className="noteForm">
      <Formik
        initialValues={initialValue || {
          id: null,
          title: '',
        }}
        onSubmit={onSubmit}
        ref={formikRef}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              render={({ field }: { field: any }) => (
                <Form.Group as={Row}>
                  <Form.Label column>
                    <Translated message={messages.titleFiled} />
                  </Form.Label>
                  <Col xs={12} sm={9}>
                    <Form.Control {...field} placeholder={formatMessage(messages.titleFiled)} />
                  </Col>
                </Form.Group>
              )}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
});
