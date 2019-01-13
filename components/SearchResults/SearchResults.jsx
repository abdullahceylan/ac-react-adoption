import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import SearchList from './SearchList';
import { petFindQuery } from '@queries';
import { loadMoreContent } from '@helpers';
import { Button } from '@styles';
import {
  SearchResultsWrapper,
  GeneralWrapper,
  InformText,
} from './SearchResults.styles';

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

  return (
    <Query
      query={petFindQuery}
      variables={petFindQueryVariables}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, fetchMore, refetch, networkStatus }) => {
        const fetching = loading || networkStatus === 4;
        if (!fetching && error) {
          return (
            <GeneralWrapper>
              <InformText>Error loading content.</InformText>
              <button onClick={() => refetch()}>Refetch!</button>
            </GeneralWrapper>
          );
        }

        return (
          <SearchResultsWrapper>
            <SearchList
              pets={!fetching && data.petFind.pets}
              placeholderCount={petFindQueryVariables.count}
              loading={fetching}
            />
            {!fetching && (
              <Button
                onClick={() =>
                  loadMoreContent({
                    queryType: 'petFind',
                    data: data.petFind.pets,
                    fetchMore,
                  })
                }
              >
                Load more
              </Button>
            )}
          </SearchResultsWrapper>
        );
      }}
    </Query>
  );
};
SearchResults.propTypes = {
  userFilters: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

SearchResults.defaultProps = {
  userFilters: {},
};

export default SearchResults;
