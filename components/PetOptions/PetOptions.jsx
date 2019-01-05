import React from 'react';
import PropTypes from 'prop-types';
import { has, find } from 'lodash/fp';
import { Title, Details } from '@components/PetDetails/PetDetails.styles';
import {
  OptionList,
  OptionItem,
  OptionTitle,
  OptionValue,
} from './PetOptions.styles';

const PetOptions = ({ pet }) => {
  if (!pet || !has('options', pet)) {
    return null;
  }

  const options = {
    altered: find(b => b.option === 'altered', pet.options),
    houseTrained: find(b => b.option === 'housetrained', pet.options),
    hasShots: find(b => b.option === 'hasShots', pet.options),
  };

  return (
    <>
      <Title>About</Title>
      <Details>
        <OptionList>
          <OptionItem>
            <OptionTitle>Characteristics</OptionTitle>
            <OptionValue>loving, cuddly, friendly</OptionValue>
          </OptionItem>
          <OptionItem>
            <OptionTitle>House Trained</OptionTitle>
            <OptionValue>{options.houseTrained ? 'Yes' : 'No'}</OptionValue>
          </OptionItem>
        </OptionList>
      </Details>
    </>
  );
};

PetOptions.propTypes = {
  pet: PropTypes.oneOfType([
    PropTypes.object
  ]).isRequired,
};

export default PetOptions;
