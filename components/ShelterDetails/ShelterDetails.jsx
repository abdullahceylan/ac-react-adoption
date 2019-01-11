import React from 'react';
import PropTypes from 'prop-types';
import { has } from 'lodash/fp';
import Link from 'next/link';
import { Query } from 'react-apollo';
import ShelterMap from '@components/ShelterMap';
import ShelterInfoBar from '@components/ShelterInfoBar';
import ShelterPets from '@components/ShelterPets';
import { shelterQuery } from '@queries';
import {
  NoRecordAvailable,
  NoRecordText,
  GeneralContainer,
} from '@styles';

import {
  ShelterDetailsWrapper,
  ContentWrapper,
  MainContent,
  ContentSection,
  Title,
  Details,
} from './ShelterDetails.styles';

import NoRecordImage from '@static/images/icons/004-pawprint.svg';

const ShelterDetails = ({ pageParams, ...rest }) => {
  const { id = 0 } = pageParams;
  const shelterQueryVariables = {
    shelterId: id,
  };

  return (
    <Query query={shelterQuery} variables={shelterQueryVariables}>
      {({ loading, error, data }) => {
        if (error) return <div>error</div>;
        if (loading) return <div>loading</div>;

        const isShelterAvailable = has('shelter.id', data) && data.shelter.id;

        if (!isShelterAvailable) {
          return (
            <NoRecordAvailable>
              <NoRecordText>
                <NoRecordImage />
                <p>No shelter details available!</p>
                <Link>
                  <a href="/" title="Homepage">
                    Home
                  </a>
                </Link>
              </NoRecordText>
            </NoRecordAvailable>
          );
        }

        const { shelter } = data;

        return (
          <ShelterDetailsWrapper width="1200px">
            <ContentWrapper>
              <MainContent xs={12} sm={12} md={12}>
                <ContentSection>
                  <ShelterMap shelter={shelter} />
                  <Title>{shelter.name}</Title>
                  <GeneralContainer width={350}>
                    <ShelterInfoBar shelter={shelter} />
                  </GeneralContainer>
                  <Details>
                    <Title>Our Pets</Title>
                    <ShelterPets shelterId={id} />
                  </Details>
                </ContentSection>
              </MainContent>
            </ContentWrapper>
          </ShelterDetailsWrapper>
        );
      }}
    </Query>
  );
};

ShelterDetails.propTypes = {
  pageParams: PropTypes.oneOfType([
    PropTypes.object,
  ]),
};

ShelterDetails.defaultProps = {
  pageParams: {},
};

export default ShelterDetails;
