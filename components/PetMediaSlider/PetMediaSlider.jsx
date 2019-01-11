import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'ac-react-simple-image-slider';
import { has, filter, map } from 'lodash/fp';

const PetMediaSlider = ({ media }) => {
  if (!media || !has('photos', media)) {
    return null;
  }

  // Filter pet's images to pick only one image for the same ID
  // pn: 300px
  const photos = filter(photo => photo.size === 'pn', media.photos);
  if (!photos) return null;

  // Build the slide list
  const slideList = map.convert({ cap: false })((photo, i) => ({
    src: photo.url,
    title: `Slide ${i + 1}`,
  }), photos);
  
  return (
    <Slider
      width="100%"
      height="300px"
      slides={slideList}
      showArrows={true}
      autoPlay={slideList.length > 1}
      duration={5}
      showDots={false}
      elementWrapperStyles={{
        borderRadius: '5px',
        overflow: 'hidden',
      }}
      itemStyles={{
        objectPosition: 'center',
      }}
    />
  );
};

PetMediaSlider.propTypes = {
  media: PropTypes.oneOfType([PropTypes.object]),
};

PetMediaSlider.defaultProps = {
  media: {},
};

export default PetMediaSlider;
