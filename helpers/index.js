import { has, uniqWith, isEqual, uniqBy } from 'lodash/fp';

/**
 * @param  {string} The word to convert the first letter to uppercase.
 * @param  {string} locale
 *
 * capitalizeFirstLetter('italia', 'en'); // "Italya"
 * capitalizeFirstLetter('italya', 'tr'); // "İtalya"
 */
export const capitalizeFirstLetter = ([first, ...rest], locale = 'en') => {
  return [first.toLocaleUpperCase(locale), ...rest].join('');
};

const deepMerge = (target, source) => {
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
};

const getUniqPets = (data, queryType) => {
  const uniqPets = uniqBy('id', data[queryType].pets);
  const result = {
    [queryType]: {
      ...data[queryType],
      pets: uniqPets,
    },
  };

  return result;
};

export const loadMoreContent = ({
  queryType,
  data,
  fetchMore,
  params = {},
}) => {
  fetchMore({
    variables: {
      offset: data.length,
      // skip: data.length,
      ...params,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      const prev = getUniqPets(previousResult, queryType);
      const next = getUniqPets(fetchMoreResult, queryType);

      if (!next) {
        return prev;
      }

      const merged = deepMerge(prev, next);
      const uniqPets = getUniqPets(merged, queryType);

      return uniqPets;
    },
  });
};
