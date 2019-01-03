const PETFINDER_API_REMOTE = 'https://ac-petfinderql.herokuapp.com/';
const PETFINDER_API_LOCAL = 'http://localhost:4000/';
const GOOGLE_MAP_API_KEY = '';

module.exports = {
  serverRuntimeConfig: {
    PETFINDER_API_REMOTE,
    PETFINDER_API_LOCAL,
    GOOGLE_MAP_API_KEY,
  },
  publicRuntimeConfig: {
    PETFINDER_API_REMOTE,
    PETFINDER_API_LOCAL,
    GOOGLE_MAP_API_KEY,
  },
};
