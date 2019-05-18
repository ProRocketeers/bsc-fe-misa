import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../header';

export const MainLayout: React.FC = ({ children }) => (
  <Container>
    <Row>
      <Col
        xs={12}
        sm={{ span: 10, offset: 1}}
        md={{ span: 8, offset: 2}}
        lg={{ span: 6, offset: 3}}
      >
        <Header />
      </Col>
    </Row>

    <Row>
      <Col
        xs={12}
        sm={{ span: 10, offset: 1}}
        md={{ span: 8, offset: 2}}
        lg={{ span: 6, offset: 3}}
      >
        <main>{children}</main>
      </Col>
    </Row>
  </Container>
);
