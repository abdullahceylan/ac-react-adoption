import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'ac-react-simple-image-slider';
import HandPicked from '@components/HandPicked';
import {
  HomeWrapper,
  LeftSide,
  LeftContent,
  Description,
  ContentTitle,
  ContentSlogan,
  LeftFooter,
  RightSide,
} from './Home.styles';

const slideList = [
  {
    src:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2744&q=80',
    title: 'Slide 1',
  },
  {
    src:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960&q=80',
    title: 'Slide 2',
  },
  {
    src: '/static/images/image-18.jpg',
    title: 'Slide 3',
  },
];

const Home = props => {
  return (
    <HomeWrapper>
      <LeftSide>
        <LeftContent>
          <Description>
            <ContentTitle>Where Pets Find Their People</ContentTitle>
            <ContentSlogan>
              Thousands of adoptable pets are looking for people. People Like
              You
            </ContentSlogan>
          </Description>
          <HandPicked />
        </LeftContent>
        <LeftFooter>
          <p>Animals have no voice. We do!</p>
          <small>They need a friend as well!</small>
        </LeftFooter>
      </LeftSide>
      <RightSide>
        <Slider
          width="100%"
          height="100%"
          slides={slideList}
          showArrows={false}
          autoPlay
          duration={5}
          showDots={false}
        />
      </RightSide>
    </HomeWrapper>
  );
};

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
