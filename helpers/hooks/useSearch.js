import { useState } from 'react';

const useSearch = () => {
  const [isSearchActive, setSearchStatus] = useState(false);

  return { isSearchActive, setSearchStatus };
};

export default useSearch;
