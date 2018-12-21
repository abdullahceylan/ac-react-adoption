import React, { useState, useEffect } from 'react';
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

const SliderConsumer = props => {};

class Slider extends React.PureComponent {
  state = {
    currentIndex: 0,
    slideCount: 0
  };

  static LeftArrow = ({ showArrows, children, onPrev }) =>
    showArrows ? <ArrowLeft onClick={onPrev}>{children}</ArrowLeft> : null;
  static RightArrow = ({ showArrows, children, onNext }) =>
    showArrows ? <ArrowRight onClick={onNext}>{children}</ArrowRight> : null;
  static Content = ({ currentIndex, slideCount, slides }) =>
    slideCount ? <ElementWrapper>{slides[currentIndex]}</ElementWrapper> : null;
  static Dots = ({ showDots, slideCount, currentIndex }) =>
    showDots ? (
      <SliderFooter>
        {range(slideCount).map(item => (
          <Dot
            key={item}
            selected={item === currentIndex}
            onClick={() => this.setState({ currentIndex: item })}
          />
        ))}
      </SliderFooter>
    ) : null;

  componentDidMount = () => {
    const { initialIndex, slides } = this.props;
    this.setState({
      slideCount: slides ? slides.length : 0,
      currentIndex: initialIndex
    });

    // setInterval(() => {
    //   nextSlide();
    // }, 5000);
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
      console.log(
        'nextSlide cond 1 oldIndex',
        currentIndex,
        'Slide count',
        slideCount - 1
      );
      this.setState(prevState => ({
        ...prevState,
        currentIndex: initialIndex
      }));
    } else {
      console.log('currentIndex + 1', currentIndex + 1);
      this.setState(prevState => ({
        ...prevState,
        currentIndex: this.state.currentIndex + 1
      }));
      console.log(
        'nextSlide cond 2 oldIndex',
        currentIndex,
        'currentIndex',
        currentIndex + 1
      );
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

    return React.Children.map(this.props.children, childElement =>
      React.cloneElement(childElement, {
        currentIndex: this.state.currentIndex,
        slideCount,
        slides,
        showArrows,
        showDots,
        onNext: this.nextSlide,
        onPrev: this.prevSlide
      })
    );

    return (
      <SliderWrapper height={height} width={width}>
        <SliderContent isDots={showDots}>
          {showArrows && <ArrowLeft onClick={this.prevSlide}>L</ArrowLeft>}
          <ElementWrapper>
            {slideCount !== 0 && children[currentIndex]}
          </ElementWrapper>
          {showArrows && <ArrowRight onClick={this.nextSlide}>R</ArrowRight>}
        </SliderContent>
        {showDots && (
          <SliderFooter>
            {range(slideCount).map(item => (
              <Dot
                key={item}
                selected={item === currentIndex}
                onClick={() => setCurrentIndex(item)}
              />
            ))}
          </SliderFooter>
        )}
      </SliderWrapper>
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
