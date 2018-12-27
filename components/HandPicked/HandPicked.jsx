import React from 'react';
import PropTypes from 'prop-types';
import { take, map } from 'lodash/fp';
import { Col } from '@styles';
import { HandPickedWrapper, HandPickedList, PetCard, PetName, PetInfo, PetMeta } from './HandPicked.styles';

import handPickedList from './data.json';

const list = take(6, handPickedList.animals);
console.log('list', list);

const HandPicked = (props) => (
  <HandPickedWrapper>
    <HandPickedList>
      {map(pet => (
        <Col key={pet.animal.id} xs={12} sm={6} md={4}>
          <PetCard style={{ background: `url(${pet.animal.primary_photo_url}) 88% 1% / cover no-repeat`}}>
            <PetInfo>
              <PetName>{pet.animal.name}</PetName>
              <PetMeta>{pet.animal.type.name} - {pet.animal.sex}</PetMeta>
              <PetMeta>{pet.animal.age} - {pet.animal.size}</PetMeta>
              <PetMeta>{pet.animal.primary_color} - {pet.animal.coat_length}</PetMeta>
            </PetInfo>
          </PetCard>
        </Col>
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
