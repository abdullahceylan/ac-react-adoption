import React from 'react';
import PropTypes from 'prop-types';
import { SearchResultsWrapper } from './SearchResults.styles';

const SearchResults = ({ children, ...rest}) => (
  <SearchResultsWrapper>
    {children}
  </SearchResultsWrapper>
);

SearchResults.propTypes = {
  // bla: PropTypes.string,
};

SearchResults.defaultProps = {
  // bla: 'test',
};

export default SearchResults;
