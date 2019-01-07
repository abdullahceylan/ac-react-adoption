import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import PetCard from '@components/PetCard';
import * as Queries from './Queries';
import { Col } from '@styles';
import { SearchResultsWrapper, SearchList } from './SearchResults.styles';

// import { data } from './data.json';

const SearchResults = props => {
  const petFindQueryVariables = {
    location: 'Canada',
    animal: 'cat',
    breed: null,
    size: null,
    sex: null,
    age: null,
    offset: null,
    count: 10,
  };

  return (
    <Query query={Queries.petFindQuery} variables={petFindQueryVariables}>
      {({ loading, error, data, fetchMore }) => {
        if (error) return <div>Error loading posts.</div>;
        if (loading) return <div>Loading</div>;

        // console.log('searchData', petFind);
        return (
          <SearchResultsWrapper>
            <SearchList>
              {map(
                pet => (
                  <Col key={pet.id} xs={4} sm={4} md={2}>
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
