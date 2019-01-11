import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { has } from 'lodash/fp';

export const getPetQuery = gql`
  query pet($id: String!) {
    pet(id: $id) {
      id
      name
      status
      age
      size
      id
      shelterPetId
      sex
      description
      mix
      shelterId
      lastUpdate
      animal
      options {
        option
      }
      media {
        photos {
          size
          url
        }
      }
    }
  }
`;

export const getPetQueryVariables = {
  id: '0',
};

const getShelterQuery = gql`
  query shelter($shelterId: String!) {
    shelter(shelterId: $shelterId) {
      id
      name
      phone
      email
      address1
      # address2
      city
      state
      zip
      country
      # fax
      latitude
      longitude
    }
  }
`;

const PetDetailsQuery = compose(
  graphql(getPetQuery, {
    name: 'getPetQuery',
    options: props => {
      // console.log('propsss', props);
      return {
        variables: {
          ...getPetQueryVariables,
          id: props.pageParams.id,
        },
      };
    },
  }),
  graphql(getShelterQuery, {
    name: 'getShelterQuery',
    options: ({ getPetQuery }) => {
      // console.log('getPetQuery', getPetQuery);
      return {
        variables: {
          shelterId:
            has('pet.shelterId', getPetQuery) && getPetQuery.pet.shelterId,
        },
      };
    },
  }),
);

export default PetDetailsQuery;
