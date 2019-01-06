import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash/fp';
import SelectBox from '@components/SelectBox';
import SearchFilters, { AnimalFilters } from '@components/SearchFilters';
import SearchResults from '@components/SearchResults';
import { useGeoLocation, useAddress, coor2address } from '@helpers';
import {
  SearchWrapper,
  SearchHeader,
  FormWrapper,
  SearchForm,
  SearchInput,
  SearchIcon,
  CloseIcon,
} from './Search.styles';

import SearchImage from '@static/images/search.svg';
import CloseImage from '@static/images/close.svg';

const useCurrentAnimal = (initialAnimal = {}) => {
  const [currentAnimal, setAnimal] = useState(initialAnimal);

  return { currentAnimal, setAnimal };
};

const Search = props => {
  const { currentAnimal, setAnimal } = useCurrentAnimal();
  const { currentAddress, setAddress } = useAddress();
  const location = useGeoLocation();

  // console.log(location.latitude);

  useEffect(
    () => {
      // console.log('currentAddress', currentAddress);
      setTimeout(() => {
        coor2address(location.latitude, location.longitude, setAddress);
        // console.log('address', address);
        // setAddress(address);
      }, 2000);
    },
    [location],
  );

  const onChange = (selectedItem, downshiftState) => {
    console.log('selectedItem', selectedItem);

    setAnimal(selectedItem);
  };
  // console.log('currentAnimal', currentAnimal);
  return (
    <SearchWrapper>
      <SearchHeader>
        <FormWrapper>
          <SearchForm>
            <SearchIcon>
              <SearchImage />
            </SearchIcon>
            <SearchInput
              placeholder="Location"
              autocomplete="off"
              value={currentAddress.result}
            />
            <SelectBox
              placeholder="Animal type"
              width={150}
              height={70}
              items={AnimalFilters.animals}
              onChangeCallback={onChange}
            />
          </SearchForm>
          <CloseIcon>
            <CloseImage />
          </CloseIcon>
        </FormWrapper>
      </SearchHeader>
      <SearchFilters currentAnimal={currentAnimal} />
      <SearchResults />
    </SearchWrapper>
  );
};

Search.propTypes = {
  // bla: PropTypes.string,
};

Search.defaultProps = {
  // bla: 'test',
};

export default Search;
