import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'ac-react-simple-image-slider';
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

const slideList = [
  {
    src: '/static/images/dog.png',
    title: 'Slide 3'
  },
  {
    src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2744&q=80',
    title: 'Slide 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80',
    title: 'Slide 2'
  },
];

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
    <Slider width="100%" height="100%" slides={slideList} showArrows={false} autoPlay duration={5} showDots={false} />
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
