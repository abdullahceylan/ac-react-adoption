import gql from 'graphql-tag';

const shelterPetsQuery = gql`
  query shelterGetPets(
    $shelterId: String!
    $count: Int
    $offset: Int
    $status: String
  ) {
    shelterGetPets(
      shelterId: $shelterId
      count: $count
      offset: $offset
      status: $status
    ) {
      lastOffset
      isLastRecord
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
