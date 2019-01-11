import React from 'react';
import { LayoutContainer, Content } from '@styles';
import Search from '@components/Search';
import { useSearch } from '@helpers/hooks';
import { Header, Title, SearchIcon } from './MainLayout.styles';

const SearchImage = '/static/images/search.svg';

const MainLayout = ({ children }) => {
  const { isSearchActive, setSearchStatus } = useSearch();

  const onClickSearch = () => {
    setSearchStatus(!isSearchActive);

    console.log('isSearchActive', isSearchActive);
  };

  return (
    <LayoutContainer>
      <Header>
        <Title>Don't buy, adopt!</Title>
        <SearchIcon
          onClick={onClickSearch}
          src={SearchImage}
          alt="Search a pet"
        />
      </Header>
      <Search isSearchActive={isSearchActive} onClickHandler={onClickSearch} />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default MainLayout;
