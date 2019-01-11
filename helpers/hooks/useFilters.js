import { useState } from 'react';

export const useCurrentAnimal = (initialAnimal = {}) => {
  const [currentAnimal, setAnimal] = useState(initialAnimal);

  return { currentAnimal, setAnimal };
};

export const useUserFilters = () => {
  const [userFilters, setUserFilter] = useState({
    location: 'Canada',
    animal: null,
    breed: null,
    size: null,
    sex: null,
    age: null,
    offset: null,
    count: 12,
  });

  return { userFilters, setUserFilter };
};
