import React from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash/fp';
import Link from 'next/link';
import ShelterMap from '@components/ShelterMap';
import PetMediaSlider from '@components/PetMediaSlider';
import PetBio from '@components/PetBio';
import PetOptions from '@components/PetOptions';
import ShelterInfoBar from '@components/ShelterInfoBar';
import { PetDetailsQuery } from './PetDetails.query';
import {
  PetDetailsWrapper,
  ContentWrapper,
  MainContent,
  ContentSection,
  Title,
  Details,
  PetInfoBar,
  SidebarSection,
  NoPetAvailable,
  NoPetText
} from './PetDetails.styles';

import NoPetImage from '@static/images/icons/004-pawprint.svg';

const PetDetails = ({ getPetQuery, getShelterQuery, ...rest }) => {
  console.log('rest', rest);
  if (getPetQuery.loading) {
    return <div>Loading</div>;
  }

  const isPetAvailable = has('pet', getPetQuery) && getPetQuery.pet;

  if (!isPetAvailable) {
    return (
      <NoPetAvailable>
          <NoPetText>
            <NoPetImage />
            <p>No pet details available!</p>
            <Link>
              <a href="/" title='Homepage'>Home</a>
            </Link>
          </NoPetText>
      </NoPetAvailable>
    );
  }

  const { pet } = getPetQuery;
  const { shelter } = getShelterQuery;

  return (
    <PetDetailsWrapper width="1200px">
      <ContentWrapper>
        <MainContent xs={12} sm={8} md={8}>
          <ContentSection>
            <ShelterMap shelter={shelter} />
            <Title>{pet.name}</Title>
            <Details>
              <p>{pet.description}</p>
            </Details>
            <PetOptions pet={pet} />
          </ContentSection>
        </MainContent>
        <PetInfoBar xs={12} sm={4} md={4}>
          <SidebarSection>
            <PetMediaSlider media={pet.media} />
            <PetBio
              pet={pet}
              filter={['name', 'status', 'sex', 'age', 'size']}
            />
          </SidebarSection>
          <SidebarSection withIcon>
            <ShelterInfoBar shelter={shelter} />
          </SidebarSection>
        </PetInfoBar>
      </ContentWrapper>
    </PetDetailsWrapper>
  );
};

PetDetails.propTypes = {
  // bla: PropTypes.string,
};

PetDetails.defaultProps = {
  // bla: 'test',
};

export default PetDetailsQuery(PetDetails);
