import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import { Query } from 'react-apollo';
import PetCard from '@components/PetCard';
import Placeholder from '@components/Placeholder';
import { shelterGetPetsQuery } from '@queries';
import { loadMoreContent } from '@helpers';
import { ShelterPetsWrapper, ShelterPetsList } from './ShelterPets.styles';
import { Col, Button } from '@styles';
// import ShelterPetsList from './data.json';

const ShelterPets = ({ shelterId }) => {
  if (!shelterId) {
    return null;
  }

  const shelterGetPetsQueryVariables = {
    shelterId: shelterId,
    status: 'A',
    count: 8,
    offset: 0,
  };

  return (
    <Query
      query={shelterGetPetsQuery}
      variables={shelterGetPetsQueryVariables}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, fetchMore }) => {
        if (error) return <div>Error loading pets.</div>;
        if (loading) {
          return (
            <ShelterPetsWrapper>
              <ShelterPetsList>
                {Array(shelterGetPetsQueryVariables.count)
                  .fill('')
                  .map((p, i) => (
                    <Col key={i} xs={12} sm={3} md={3}>
                      <Placeholder />
                    </Col>
                  ))}
              </ShelterPetsList>
            </ShelterPetsWrapper>
          );
        }

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
            <Button
              onClick={() =>
                loadMoreContent({
                  queryType: 'shelterGetPets',
                  data: data.shelterGetPets.pets,
                  fetchMore,
                })
              }
            >
              Load more
            </Button>
          </ShelterPetsWrapper>
        );
      }}
    </Query>
  );
};

ShelterPets.propTypes = {
  shelterId: PropTypes.string.isRequired,
};

export default React.memo(ShelterPets);
