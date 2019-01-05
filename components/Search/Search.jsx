import React from 'react';
import PropTypes from 'prop-types';
import SelectBox from '@components/SelectBox';
import SearchFilters from './Filters';
import {
  SearchWrapper,
  SearchHeader,
  FormWrapper,
  SearchForm,
  SearchInput,
  SearchIcon,
  CloseIcon,
  SearchResults,
} from './Search.styles';

import SearchImage from '@static/images/search.svg';
import CloseImage from '@static/images/close.svg';

const Search = props => (
  <SearchWrapper>
    <SearchHeader>
      <FormWrapper>
        <SearchForm>
          <SearchIcon>
            <SearchImage />
          </SearchIcon>
          <SearchInput placeholder="Search a pet" autocomplete="off" />
          <SelectBox
            placeholder="Animal type"
            width={150}
            height={70}
            items={SearchFilters.animals}
          />
        </SearchForm>
        <CloseIcon>
          <CloseImage />
        </CloseIcon>
      </FormWrapper>
    </SearchHeader>
    <SearchResults />
  </SearchWrapper>
);

Search.propTypes = {
  // bla: PropTypes.string,
};

Search.defaultProps = {
  // bla: 'test',
};

export default Search;
