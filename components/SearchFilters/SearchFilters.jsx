import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, map } from 'lodash/fp';
import Filters from './Filters';
import SelectBox from '@components/SelectBox';
import { SearchFiltersWrapper, SingleFilter } from './SearchFilters.styles';

const SearchFilters = ({ currentAnimal, onChange }) => {
  if (isEmpty(currentAnimal) || !Filters[currentAnimal.id]) {
    return null;
  }

  const currentFilters = Filters[currentAnimal.id];
  console.log('currentFilters', currentFilters);
  return (
    <SearchFiltersWrapper>
      {map(
        filter => (
          <SingleFilter xs={3} sm={2} md={3} key={filter.name}>
            <SelectBox
              placeholder={filter.label}
              width={170}
              height={70}
              items={filter.options}
              // onChangeCallback={onChange}
            />
          </SingleFilter>
        ),
        currentFilters,
      )}
    </SearchFiltersWrapper>
  );
};

SearchFilters.propTypes = {
  // bla: PropTypes.string,
};

SearchFilters.defaultProps = {
  // bla: 'test',
};

export default SearchFilters;
