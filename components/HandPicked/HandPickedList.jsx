import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/fp';
import PetCard from '@components/PetCard';
import Placeholder from '@components/Placeholder';
import { Col } from '@styles';
import { HandPickedListWrapper } from './HandPicked.styles';

const HandPickedList = ({ pets, placeholderCount, loading }) => (
  <>
    <HandPickedListWrapper>
      {loading &&
        Array(placeholderCount)
          .fill('')
          .map((p, i) => (
            <Col key={i} xs={12} sm={6} md={4}>
              <Placeholder />
            </Col>
          ))}
      {!loading &&
        map(
          pet => (
            <Col key={pet.id} xs={12} sm={6} md={4}>
              <PetCard pet={pet} />
            </Col>
          ),
          pets,
        )}
    </HandPickedListWrapper>
  </>
);

HandPickedList.propTypes = {
  pets: PropTypes.oneOfType([PropTypes.array]).isRequired,
  placeholderCount: PropTypes.number,
  loading: PropTypes.bool,
};

HandPickedList.defaultProps = {
  placeholderCount: 12,
  loading: false,
};

export default HandPickedList;
