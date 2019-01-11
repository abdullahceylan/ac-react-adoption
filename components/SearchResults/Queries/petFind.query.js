import gql from 'graphql-tag';

const petFindQuery = gql`
  query petFind(
    $location: String!
    $animal: String
    $breed: String
    $size: String
    $sex: String
    $age: String
    $offset: Int
    $count: Int
  ) {
    petFind(
      location: $location
      animal: $animal
      breed: $breed
      size: $size
      sex: $sex
      age: $age
      offset: $offset
      count: $count
    ) {
      lastOffset
      pets {
        name
        status
        age
        size
        media {
          photos {
            size
            url
          }
        }
        id
        shelterPetId
        breeds {
          breed
        }
        sex
        description
        mix
        shelterId
        lastUpdate
        animal
      }
    }
  }
`;
export default petFindQuery;
