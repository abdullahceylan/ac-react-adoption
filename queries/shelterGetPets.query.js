import gql from 'graphql-tag';

const shelterPetsQuery = gql`
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

export default shelterPetsQuery;
