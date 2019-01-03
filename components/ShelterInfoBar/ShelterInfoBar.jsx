import React from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  List,
  ListItem,
  Label,
  Value,
  SectionIcon,
} from '@components/PetDetails/PetDetails.styles';

import PetShelterIcon from '@static/images/icons/018-pet-shelter.svg';

const ShelterInfoBar = ({ shelter }) => {
  if (!shelter) {
    return null;
  }

  return (
    <>
      <SectionIcon>
        <PetShelterIcon />
      </SectionIcon>
      <List>
        <Title noBorderBottom centered color="#a3d256">
          {shelter.name}
        </Title>
        <ListItem>
          <Label>Address</Label>
          <Value>
            <span>{shelter.address1}</span>
            <span>{shelter.zip}</span>
            <span>{shelter.city}, {shelter.state}</span>
          </Value>
        </ListItem>
        <ListItem>
          <Label>Phone</Label>
          <Value>{shelter.phone}</Value>
        </ListItem>
        <ListItem>
          <Label>Email</Label>
          <Value fontSize={shelter.email.length > 25 ? 13 : 16}>
            {shelter.email}
          </Value>
        </ListItem>
      </List>
    </>
  );
}

ShelterInfoBar.propTypes = {
  shelter: PropTypes.oneOfType([
    PropTypes.object
  ]).isRequired,
};

export default ShelterInfoBar;
