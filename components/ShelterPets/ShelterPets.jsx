import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import PetCard from '@components/PetCard';
import { shelterGetPetsQuery } from '@queries';
import { ShelterPetsWrapper, ShelterPetsList } from './ShelterPets.styles';
import { Col } from '@styles';
// import ShelterPetsList from './data.json';

const ShelterPets = ({ shelterId }) => {
  if (!shelterId) {
    return null;
  }

  const shelterGetPetsQueryVariables = {
    shelterId: shelterId,
    status: 'A',
    count: 10,
  };

  return (
    <Query query={shelterGetPetsQuery} variables={shelterGetPetsQueryVariables}>
      {({ loading, error, data, fetchMore }) => {
        if (error) return <div>Error loading pets.</div>;
        if (loading) return <div>Loading</div>;

        if (!data.shelterGetPets) {
          return null;
        }

        return (
          <ShelterPetsWrapper>
            <ShelterPetsList>
              {map(
                pet => (
                  <Col key={pet.id} xs={12} sm={3} md={3}>
                    <PetCard pet={pet} />
                  </Col>
                ),
                data.shelterGetPets.pets,
              )}
            </ShelterPetsList>
          </ShelterPetsWrapper>
        );
      }}
    </Query>
  );
};

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
        shelterGetPets: [...previousResult.petFind, ...fetchMoreResult.petFind],
      });
    },
  });
}

ShelterPets.propTypes = {
  shelterId: PropTypes.string.isRequired,
};

export default React.memo(ShelterPets);
