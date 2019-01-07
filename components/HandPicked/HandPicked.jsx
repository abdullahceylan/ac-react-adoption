import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PetCard from '@components/PetCard';
import { HandPickedWrapper, HandPickedList } from './HandPicked.styles';
import { Col } from '@styles';
// import handPickedList from './data.json';

export const handPickedListQuery = gql`
  query shelterGetPets($shelterId: String!, $count: Int, $status: String) {
    shelterGetPets(shelterId: $shelterId, count: $count, status: $status) {
      lastOffset
      pets {
        id
        name
        breeds {
          breed
        }
        media {
          photos {
            size
            url
          }
        }
        animal
        age
        size
        sex
      }
    }
  }
`;
export const handPickedListQueryVars = {
  shelterId: 'TN221',
  count: 6,
  status: 'A',
};

const HandPicked = props => (
  <Query query={handPickedListQuery} variables={handPickedListQueryVars}>
    {({ loading, error, data: { shelterGetPets }, fetchMore }) => {
      if (error) return <div>Error loading pets.</div>;
      if (loading) return <div>Loading</div>;

      console.log('handPicked', shelterGetPets);

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
              shelterGetPets.pets,
            )}
          </HandPickedList>
        </HandPickedWrapper>
      );
    }}
  </Query>
);

function loadMorePosts(shelterGetPets, fetchMore) {
  fetchMore({
    variables: {
      skip: shelterGetPets.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        shelterGetPets: [
          ...previousResult.shelterGetPets,
          ...fetchMoreResult.shelterGetPets,
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

export default HandPicked;
