import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import {
  SliderWrapper,
  SliderContent,
  ArrowLeft,
  ArrowRight,
  ElementWrapper,
  SliderFooter,
  Dot
} from './Slider.styles';
import arrowLeft from './images/left-arrow.svg';
// Assets
// const arrowLeft = require('./images/left-arrow.svg');
// const arrowRight = require('./images/right-arrow.png');

const SliderContext = React.createContext();

const SliderConsumer = props => (
  <SliderContext.Consumer {...props}>
    {context => {
      if (!context) {
        throw new Error(
          `Slider compound components cannot be rendered outside the Slider component`
        );
      }
      return props.children(context);
    }}
  </SliderContext.Consumer>
);

class Slider extends React.PureComponent {
  state = {
    currentIndex: 0,
    slideCount: 0
  };

  static LeftArrow = ({ children }) => (
    <SliderConsumer>
      {({ nav }) =>
        nav.showArrows ? (
          <ArrowLeft onClick={nav.onPrev}>{children}</ArrowLeft>
        ) : null
      }
    </SliderConsumer>
  );

  static RightArrow = ({ children }) => (
    <SliderConsumer>
      {({ nav }) =>
        nav.showArrows ? (
          <ArrowRight onClick={nav.onNext}>{children}</ArrowRight>
        ) : null
      }
    </SliderConsumer>
  );

  static Content = props => (
    <SliderConsumer>
      {({ currentIndex, slideCount, slides }) =>
        slideCount ? (
          <ElementWrapper>{slides[currentIndex]}</ElementWrapper>
        ) : null
      }
    </SliderConsumer>
  );

  static Dots = () => (
    <SliderConsumer>
      {({ nav, slideCount, currentIndex }) =>
        nav.showDots ? (
          <SliderFooter>
            {range(slideCount).map(item => (
              <Dot
                key={item}
                selected={item === currentIndex}
                onClick={() => this.setState({ currentIndex: item })}
              />
            ))}
          </SliderFooter>
        ) : null
      }
    </SliderConsumer>
  );

  componentDidMount = () => {
    const { initialIndex, slides } = this.props;
    this.setState({
      slideCount: slides ? slides.length : 0,
      currentIndex: initialIndex
    });

    setInterval(() => {
      this.nextSlide();
    }, 3000);
  };

  componentWillReceiveProps = nextProps => {
    const { initialIndex, slides } = nextProps;
    this.setState({
      slideCount: slides ? slides.length : 0,
      currentIndex: initialIndex
    });
  };

  nextSlide = () => {
    const { currentIndex, slideCount } = this.state;
    const { initialIndex } = this.props;
    if (currentIndex === slideCount - 1) {
      this.setState(prevState => ({
        ...prevState,
        currentIndex: initialIndex
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentIndex: this.state.currentIndex + 1
      }));
    }
    return;
  };

  prevSlide = () => {
    const { currentIndex, slideCount } = this.state;
    const { indefiniteLoop } = this.props;
    if (currentIndex > 0) {
      this.setState(prevState => ({
        ...prevState,
        currentIndex: this.state.currentIndex - 1
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentIndex: indefiniteLoop ? slideCount - 1 : 0
      }));
    }
  };

  render() {
    const { slides, showArrows, showDots } = this.props;
    const { currentIndex, slideCount } = this.state;

    return (
      <SliderContext.Provider
        value={{
          currentIndex: this.state.currentIndex,
          slideCount,
          slides,
          nav: {
            showDots,
            showArrows,
            onNext: this.nextSlide,
            onPrev: this.prevSlide
          }
        }}
      >
        {this.props.children}
      </SliderContext.Provider>
    );
  }
}

const Usage = ({ children, width, height, ...props }) => {
  console.log('​Usage -> children', children);

  return (
    <SliderWrapper height={height} width={width}>
      <SliderContent isDots={props.showDots}>
        <Slider slides={children} {...props}>
          <Slider.LeftArrow>L</Slider.LeftArrow>
          <Slider.Content />
          <Slider.RightArrow>R</Slider.RightArrow>
          <Slider.Dots />
        </Slider>
      </SliderContent>
    </SliderWrapper>
  );
};

Slider.propTypes = {
  initialIndex: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  slides: PropTypes.arrayOf(PropTypes.object),
  showArrows: PropTypes.bool,
  showDots: PropTypes.bool,
  indefiniteLoop: PropTypes.bool
};

Slider.defaultProps = {
  initialIndex: 0,
  width: '640px',
  height: '480px',
  showArrows: true,
  showDots: true,
  indefiniteLoop: false
};

export default Usage;
