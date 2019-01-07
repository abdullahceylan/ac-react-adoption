import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { has, find } from 'lodash/fp';
import { PetCardContainer, PetName, PetInfo, PetMeta } from './PetCard.styles';

const getPetPhoto = (pet, size = 'pn') => {
  if (has('media.photos', pet)) {
    const getMatch = find(d => size === d.size, pet.media.photos);
    if (getMatch) {
      return getMatch.url;
    }
    return pet.media.photos[0].url;
  }
  return null;
};

const PetCard = ({ pet }) => {
  if (!pet) {
    return null;
  }
  return (
    <Link href={`/pet-details/${pet.id}`}>
      <PetCardContainer
        style={{
          background: `url(${getPetPhoto(pet)}) 88% 1% / cover no-repeat`,
        }}
      >
        <PetInfo>
          <PetName>{pet.name}</PetName>
          <PetMeta>
            {pet.animal} - {pet.sex}
          </PetMeta>
          <PetMeta>
            {pet.age} - {pet.size}
          </PetMeta>
        </PetInfo>
      </PetCardContainer>
    </Link>
  );
};
PetCard.propTypes = {
  pet: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PetCard;
