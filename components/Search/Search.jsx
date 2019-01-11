import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import SelectBox from '@components/SelectBox';
import SearchFilters, { AnimalFilters } from '@components/SearchFilters';
import SearchResults from '@components/SearchResults';
import {
  useGeoLocation,
  useAddress,
  coor2address,
  useCurrentAnimal,
  useUserFilters,
} from '@helpers/hooks';
import {
  SearchWrapper,
  SearchHeader,
  FormWrapper,
  SearchForm,
  SearchInput,
  SearchIcon,
  CloseIcon,
  SearchInfoText,
} from './Search.styles';

import SearchImage from '@static/images/search.svg';
import CloseImage from '@static/images/close.svg';

const Search = ({ isSearchActive, onClickHandler }) => {
  const { currentAnimal, setAnimal } = useCurrentAnimal();
  const { currentAddress, setAddress } = useAddress();
  const { userFilters, setUserFilter } = useUserFilters();

  // const location = useGeoLocation();

  // // console.log(location.latitude);

  // useEffect(
  //   () => {
  //     // console.log('currentAddress', currentAddress);
  //     setTimeout(() => {
  //       coor2address(location.latitude, location.longitude, setAddress);
  //       // console.log('address', address);
  //       // setAddress(address);
  //     }, 2000);
  //   },
  //   [location],
  // );

  const onChangeLocation = e => {
    // setAddress(e.target.value);
    setUserFilter({ ...userFilters, location: e.target.value });
  };

  // const onChangeSelectBox = (e, type) => {
  //   setUserFilter({ ...userFilters, [type]: e.target.value });
  // }

  const onChangeSelectBox = (selectedItem, downshiftState, returnThis) => {
    if (returnThis) {
      if (returnThis.type === 'animal') {
        setAnimal(selectedItem);
      }
      selectedItem &&
        setUserFilter({
          ...userFilters,
          [returnThis.type]: selectedItem.value
            ? selectedItem.value
            : selectedItem.id,
        });
    }
  };
  return (
    <SearchWrapper isSearchActive={isSearchActive}>
      <SearchHeader>
        <FormWrapper>
          <SearchForm>
            <SearchIcon>
              <SearchImage />
            </SearchIcon>
            {map(
              filter =>
                filter.display &&
                filter.component === 'searchbar' && (
                  <SelectBox
                    key={filter.name}
                    placeholder={filter.label}
                    width={100}
                    height={70}
                    items={filter.options}
                    margin="0 0 0 5px"
                    // onChangeCallback={onChange}
                  />
                ),
              AnimalFilters.common,
            )}
            <SearchInput
              placeholder="Location"
              autocomplete="off"
              width="300px"
              value={userFilters.location}
              onChange={onChangeLocation}
            />
            <SelectBox
              placeholder="Animal type"
              width={150}
              height={70}
              items={AnimalFilters.animals}
              onChangeCallback={onChangeSelectBox}
              returnThis={{ type: 'animal' }}
            />
          </SearchForm>
          <CloseIcon onClick={onClickHandler}>
            <CloseImage />
          </CloseIcon>
        </FormWrapper>
      </SearchHeader>
      <SearchFilters
        currentAnimal={currentAnimal}
        onChange={onChangeSelectBox}
      />

      {userFilters.animal && <SearchResults userFilters={userFilters} />}
      {!userFilters.animal && (
        <SearchInfoText>
          Enter a location in the search input above, and results will be displayed as you type. You can customize the search results, size, age, breed etc. after select an animal type.
        </SearchInfoText>
      )}
    </SearchWrapper>
  );
};

Search.propTypes = {
  isSearchActive: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

Search.defaultProps = {
  isSearchActive: false,
  onClickHandler: () => {},
};

export default Search;
