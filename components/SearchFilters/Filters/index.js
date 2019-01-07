import barnyardFilters from './barnyard-filters';
import birdFilters from './bird-filters';
import catFilters from './cat-filters';
import dogFilters from './dog-filters';
import horseFilters from './horse-filters';
import otherFilters from './other-filters';
import rabbitFilters from './rabbit-filters';
import smallFurryFilters from './small-furry-filters';
import animalFilters from './animal-filters';
import commonFilters from './common-filters';

const Filters = {
  animals: animalFilters,
  cat: {
    ...commonFilters,
    ...catFilters,
  },
  dog: {
    ...commonFilters,
    ...dogFilters,
  },
  horse: {
    ...commonFilters,
    ...horseFilters,
  },
  bird: {
    ...commonFilters,
    ...birdFilters,
  },
  smallFurry: {
    ...commonFilters,
    ...smallFurryFilters,
  },
  barnyard: {
    ...commonFilters,
    ...barnyardFilters,
  },
  common: commonFilters,
};

export default Filters;
