import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const Placeholder = ({ width, height, speed, ...rest }) => (
  <ContentLoader
    width={width}
    height={height}
    speed={speed}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...rest}
    style={{ borderRadius: '15px', marginBottom: '20px'}}
  >
    <rect x="3" y="2" rx="5" ry="5" width={width} height={height} />
  </ContentLoader>
);

Placeholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  speed: PropTypes.number,
};

Placeholder.defaultProps = {
  width: 276,
  height: 310,
  speed: 2,
};

export default Placeholder;
