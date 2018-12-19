import React from 'react';
import PropTypes from 'prop-types';
import HandPicked from '@components/HandPicked';
import {
  HomeWrapper,
  LeftSide,
  LeftHeader,
  Title,
  SearchWrapper,
  LeftContent,
  Description,
  ContentTitle,
  ContentSlogan,
  LeftFooter,
  RightSide,
} from './Home.styles';

const SearchIcon = '/static/images/search.svg';

const Home = (props) => (
  <HomeWrapper>
    <LeftSide>
      <LeftHeader>
        <Title>Don't buy, adopt!</Title>
        <SearchWrapper><img src={SearchIcon} alt="Search a pet" /></SearchWrapper>
      </LeftHeader>
      <LeftContent>
        <Description>
          <ContentTitle>Where Pets Find Their People</ContentTitle>
          <ContentSlogan>Thousands of adoptable pets are looking for people. People Like You</ContentSlogan>
        </Description>
        <HandPicked />
      </LeftContent>
      <LeftFooter>
        <p>Animals have no voice. We do!</p>
        <small>Donate now to help to animals. Today!</small>
      </LeftFooter>
    </LeftSide>
    <RightSide>
      
    </RightSide>
  </HomeWrapper>
);

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
