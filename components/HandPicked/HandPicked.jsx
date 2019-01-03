import React from 'react';
import PropTypes from 'prop-types';
import { take, map, has, find } from 'lodash/fp';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { Col } from '@styles';
import {
  HandPickedWrapper,
  HandPickedList,
  PetCard,
  PetName,
  PetInfo,
  PetMeta,
} from './HandPicked.styles';

import handPickedList from './data.json';

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
  shelterId: "TN221",
  count: 6,
  status: "A",
};

const getPetPhoto = (pet, size = 'pn') => {
  if (has('media.photos', pet)) {
    // console.log('pet.media', pet.media.photos);
    // console.log('geldi')
    const getMatch = find(d => size === d.size, pet.media.photos);
    if (getMatch) {
      return getMatch.url;
    }
    return pet.media.photos[0].url;
  }
  return null;
};
// const list = take(6, handPickedList.animals);
// console.log('list', list);

const HandPicked = props => (
  <Query query={handPickedListQuery} variables={handPickedListQueryVars}>
    {({ loading, error, data: { shelterGetPets }, fetchMore }) => {
      if (error) return <div>Error loading posts.</div>;
      if (loading) return <div>Loading</div>;

      console.log('handPicked', shelterGetPets);

      // const areMorePosts = handPicked.length
      return (
        <HandPickedWrapper>
          <HandPickedList>
            {map(
              pet => (
                <Col key={pet.id} xs={12} sm={6} md={4}>
                <Link href={`/pet-details/${pet.id}`}>
                  <PetCard
                    
                    style={{
                      background: `url(${getPetPhoto(pet)}) 88% 1% / cover no-repeat`,
                    }}
                  >
                    <PetInfo>
                      <PetName>{pet.name}</PetName>
                      <PetMeta>
                        {pet.animal} - {pet.sex}
                      </PetMeta>
                      <PetMeta>
                        {pet.age} - {pet.size}
                      </PetMeta>
                    </PetInfo>
                  </PetCard>
                </Link>
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
