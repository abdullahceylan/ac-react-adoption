import gql from 'graphql-tag';

const shelterFindQuery = gql`
  query shelterFindQuery($shelterId: String!) {
    shelter(shelterId: $shelterId) {
      id
      name
      phone
      email
      address1
      address2
      city
      state
      zip
      country
      fax
      latitude
      longitude
    }
  }
`;

export default shelterFindQuery;
