
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
