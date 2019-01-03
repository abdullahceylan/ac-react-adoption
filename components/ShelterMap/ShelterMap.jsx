import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import getConfig from 'next/config';
import { ShelterMapContainer, MapMarker } from './ShelterMap.styles';

const { publicRuntimeConfig } = getConfig();

const ShelterMap = ({ shelter }) => {
  if (!shelter) {
    return null;
  }

  const coordinates = {
    lat: Number(parseFloat(shelter.latitude).toFixed(2)),
    lng: Number(parseFloat(shelter.longitude).toFixed(2)),
  };

  const Marker = ({ text }) => <MapMarker>{text}</MapMarker>;

  return (
    <ShelterMapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: publicRuntimeConfig.GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={11}
      >
        <Marker lat={coordinates.lat} lng={coordinates.lng} />
      </GoogleMapReact>
    </ShelterMapContainer>
  );
};

ShelterMap.propTypes = {
  shelter: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ShelterMap;
