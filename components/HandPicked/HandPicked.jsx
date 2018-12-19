import React from 'react';
import PropTypes from 'prop-types';
import { take, map } from 'lodash/fp';
import { HandPickedWrapper, HandPickedList, PetCard, PetImage, PetName } from './HandPicked.styles';

import handPickedList from './data.json';

const list = take(6, handPickedList.animals);
console.log('list', list);

const HandPicked = (props) => (
  <HandPickedWrapper>
    <HandPickedList>
      {map(pet => (
        <PetCard key={pet.animal.id}>
          <PetImage><img src={pet.animal.primary_photo_url} alt={pet.animal.name} /></PetImage>
          <PetName>{pet.animal.name}</PetName>
        </PetCard>
      ), list)}
    </HandPickedList>
  </HandPickedWrapper>
);

HandPicked.propTypes = {
  // bla: PropTypes.string,
};

HandPicked.defaultProps = {
  // bla: 'test',
};

export default HandPicked;
