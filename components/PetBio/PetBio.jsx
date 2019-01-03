import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '@helpers';
import {
  Title,
  List,
  ListItem,
  Label,
  Value,
} from '@components/PetDetails/PetDetails.styles';

const PetBio = ({ pet, filter }) => {
  if (Array.isArray(filter) && filter.length < 1) {
    return null;
  }

  return (
    <>
      <Title>Bio</Title>
      <List>
        {filter.map(attr => (
          <ListItem key={attr}>
            <Label>{capitalizeFirstLetter(attr)}</Label>
            <Value>{pet[attr]}</Value>
          </ListItem>
        ))}
      </List>
    </>
  );
};

PetBio.propTypes = {
  pet: PropTypes.oneOfType([
    PropTypes.object
  ]).isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.array
  ]),
};

PetBio.defaultProps = {
  filter: [],
};

export default PetBio;
