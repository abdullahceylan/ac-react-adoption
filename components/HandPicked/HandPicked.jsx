import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import HandPickedList from './HandPickedList';
import { petFindQuery } from '@queries';
import { HandPickedWrapper, HandPickedListWrapper } from './HandPicked.styles';

const HandPicked = ({ count }) => {
  const petFindQueryVariables = {
    location: 'Canada',
    count,
  };

  return (
    <Query
      query={petFindQuery}
      variables={petFindQueryVariables}
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data }) => {
        if (error) return <div>Error loading pets.</div>;

        // if (!data.petFind) {
        //   return null;
        // }

        return (
          <HandPickedWrapper>
            <HandPickedList
              pets={!loading && data.petFind.pets}
              count={petFindQueryVariables.count}
              loading={loading}
            />
          </HandPickedWrapper>
        );
      }}
    </Query>
  );
};

HandPicked.propTypes = {
  count: PropTypes.number,
};

HandPicked.defaultProps = {
  count: 6,
};

export default React.memo(HandPicked);
