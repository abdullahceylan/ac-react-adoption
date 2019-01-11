import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { SidebarSectionIcon, Button } from '@styles';
import {
  Title,
  List,
  ListItem,
  Label,
  Value,
} from '@components/PetDetails/PetDetails.styles';

import PetShelterIcon from '@static/images/icons/018-pet-shelter.svg';

const ShelterInfoBar = ({ shelter, withIcon, withTitle, withButton }) => {
  if (!shelter) {
    return null;
  }

  return (
    <>
      {withIcon && (
        <SidebarSectionIcon>
          <PetShelterIcon />
        </SidebarSectionIcon>
      )}
      <List>
        {withTitle && (
          <Title noBorderBottom centered color="#a3d256">
            {shelter.name}
          </Title>
        )}
        <ListItem>
          <Label>Address</Label>
          <Value>
            <span>{shelter.address1}</span>
            <span>{shelter.zip}</span>
            <span>
              {shelter.city}, {shelter.state}
            </span>
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
      {withButton && (
        <Link href={`/shelter-details/${shelter.id}`}>
          <Button>Details</Button>
        </Link>
      )}
    </>
  );
};

ShelterInfoBar.propTypes = {
  shelter: PropTypes.oneOfType([PropTypes.object]).isRequired,
  withIcon: PropTypes.bool,
  withTitle: PropTypes.bool,
  withButton: PropTypes.bool,
};

ShelterInfoBar.defaultProps = {
  withIcon: false,
  withTitle: false,
  withButton: false,
};

export default ShelterInfoBar;
