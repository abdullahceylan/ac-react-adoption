import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PetCard from '@components/PetCard';
import { petFindQuery } from '@queries';
import { HandPickedWrapper, HandPickedList } from './HandPicked.styles';
import { Col } from '@styles';
// import handPickedList from './data.json';


export const petFindQueryVariables = {
  location: 'Canada',
  count: 6,
};

const HandPicked = props => (
    <Query query={petFindQuery} variables={petFindQueryVariables}>
      {({ loading, error, data, fetchMore }) => {
        if (error) return <div>Error loading pets.</div>;
        if (loading) return <div>Loading</div>;
        
        if (!data.petFind) {
          return null;
        }

        // console.log('handPicked', petFind);

        // const areMorePosts = handPicked.length
        return (
          <HandPickedWrapper>
            <HandPickedList>
              {map(
                pet => (
                  <Col key={pet.id} xs={12} sm={6} md={4}>
                    <PetCard pet={pet} />
                  </Col>
                ),
                data.petFind.pets,
              )}
            </HandPickedList>
          </HandPickedWrapper>
        );
      }}
    </Query>
);

function loadMorePosts(petFind, fetchMore) {
  fetchMore({
    variables: {
      skip: petFind.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        shelterGetPets: [
          ...previousResult.petFind,
          ...fetchMoreResult.petFind,
        ],
      });
    },
  });
}

HandPicked.propTypes = {
  // bla: PropTypes.string,
};

HandPicked.defaultProps = {
  // bla: 'test',
};

export default React.memo(HandPicked);
