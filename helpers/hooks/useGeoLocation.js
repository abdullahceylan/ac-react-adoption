import { useState, useEffect } from 'react';
import { has } from 'lodash/fp';

export const useGeoLocation = () => {
  const [location, setLocation] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    address: null,
    speed: null,
    timestamp: Date.now(),
  });
  let isMounted = true;
  let watchId;

  const onEvent = event => {
    if (isMounted) {
      // const currentAddress = event.coords.latitude
      //   ? coor2address(event.coords.latitude, event.coords.longitude)
      //   : '';

      setLocation({
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        address: '',
        speed: event.coords.speed,
        timestamp: event.timestamp,
      });
    }
  };

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition(onEvent);
      watchId = navigator.geolocation.watchPosition(onEvent);

      return () => {
        isMounted = false;
        navigator.geolocation.clearWatch(watchId);
      };
    },
    [0],
  );

  return location;
};

export const useAddress = () => {
  const [currentAddress, setAddress] = useState({
    result: '',
    error: false,
  });

  return { currentAddress, setAddress };
};

export const coor2address = (lat, long, cb = () => {}) => {
  const output = (result = '', error = false) => ({
    result,
    error,
  });

  try {
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, long);
    let address;

    geocoder.geocode(
      {
        latLng: latLng,
      },
      (result, message) => {
        console.log('result', result);
        message === google.maps.GeocoderStatus.OK
          ? result[7]
            ? cb(output(result[7].formatted_address))
            : cb(output(null, 'No results found'))
          : cb(output(null, `Geocoder failed due to: ${message}`));
      },
    );
  } catch (err) {
    cb(output(null, `Geocoder failed due to: ${err.message}`));
  }
};
