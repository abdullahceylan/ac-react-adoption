import React from 'react';
import PropTypes from 'prop-types';
import {
  StatusCode,
  ErrorHeader,
  ErrorBody,
  ErrorFooter,
  ErrorWrapper,
} from './ErrorMessage.styles';

const cityImage = '/static/images/city.png';
const kidImage = '/static/images/girl-and-dog.png';

const ErrorMessage = ({ statusCode }) => (
  <ErrorWrapper>
    <StatusCode>{statusCode}</StatusCode>
    <ErrorHeader>
      Sorry, we couldn't find the page that you've requested.
    </ErrorHeader>
    <ErrorBody>But, we can try to find a pet for you!</ErrorBody>
    <ErrorFooter>
      <img src={kidImage} alt="" />
    </ErrorFooter>
  </ErrorWrapper>
);

ErrorMessage.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default ErrorMessage;
