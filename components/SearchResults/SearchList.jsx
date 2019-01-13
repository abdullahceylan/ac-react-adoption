import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import PetCard from '@components/PetCard';
import Placeholder from '@components/Placeholder';
import { Col } from '@styles';
import { SearchListWrapper } from './SearchResults.styles';

const SearchList = ({ pets, placeholderCount, loading }) => (
  <>
    <SearchListWrapper>
      {loading &&
        Array(placeholderCount)
          .fill('')
          .map((p, i) => (
            <Col key={i} xs={6} sm={4} md={3} lg={2}>
              <Placeholder />
            </Col>
          ))}
      {!loading &&
        map(
          pet => (
            <Col key={pet.id} xs={6} sm={4} md={3} lg={2}>
              <PetCard key={pet.id} pet={pet} />
            </Col>
          ),
          pets,
        )}
    </SearchListWrapper>
  </>
);

SearchList.propTypes = {
  pets: PropTypes.oneOfType([PropTypes.array]).isRequired,
  placeholderCount: PropTypes.number,
  loading: PropTypes.bool,
};

SearchList.defaultProps = {
  placeholderCount: 12,
  loading: false,
};

export default SearchList;
