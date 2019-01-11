import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import PetCard from '@components/PetCard';
import { petFindQuery } from '@queries';
import { Col } from '@styles';
import { SearchResultsWrapper, SearchList, GeneralWrapper, InformText, LoadingImage } from './SearchResults.styles';

// import { data } from './data.json';

const loadingGif = '/static/images/searching.gif';

const SearchResults = ({ userFilters }) => {
  const petFindQueryVariables = {
    location: 'Canada',
    animal: null,
    breed: null,
    size: null,
    sex: null,
    age: null,
    offset: null,
    count: 12,
    ...userFilters,
  };
  if (petFindQueryVariables.animal === 'all-animals') {
    petFindQueryVariables.animal = null;
  }
  console.log('userFilters', userFilters);
  console.log('petFindQueryVariables', petFindQueryVariables);

  return (
    <Query query={petFindQuery} variables={petFindQueryVariables}>
      {({ loading, error, data, fetchMore, refetch }) => {
        // console.log('data', data);
        // console.log('error', error);
        if (!loading && error) {
          return (
            <GeneralWrapper>
              <InformText>Error loading content.</InformText>
              <button onClick={() => refetch()}>Refetch!</button>
            </GeneralWrapper>
          );
        }
        if (loading) {
          return (
            <GeneralWrapper>
              <LoadingImage src={loadingGif} alt="" />
              <InformText>Loading</InformText>
            </GeneralWrapper>
          );
        }

        // console.log('searchData', petFind);
        return (
          <SearchResultsWrapper>
            <SearchList>
              {map(
                pet => (
                  <Col key={pet.id} xs={6} sm={4} md={3} lg={2}>
                    <PetCard key={pet.id} pet={pet} />
                  </Col>
                ),
                data.petFind.pets,
              )}
            </SearchList>
          </SearchResultsWrapper>
        );
      }}
    </Query>
  );
};
SearchResults.propTypes = {
  // bla: PropTypes.string,
};

SearchResults.defaultProps = {
  // bla: 'test',
};

export default SearchResults;
