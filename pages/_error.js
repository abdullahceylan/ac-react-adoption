import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../layouts';
import { Row, Col } from '@styles';
import ErrorMessage from '@components/ErrorMessage';

const Error = ({ params, statusCode }) => {
  return (
    <MainLayout params={params}>
      <Row>
        <Col md={12}>
          <ErrorMessage statusCode={statusCode} />
        </Col>
      </Row>
    </MainLayout>
  );
};

Error.getInitialProps = ({ query, res, jsonPageRes }) => {
  const statusCode = res
    ? res.statusCode
    : jsonPageRes
    ? jsonPageRes.status
    : null;
  return { params: query, pageProps: { pageType: statusCode }, statusCode };
};

Error.propTypes = {
  params: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  statusCode: PropTypes.number.isRequired,
};

export default Error;
