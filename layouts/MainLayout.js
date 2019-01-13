import React from 'react';
import Link from 'next/link';
import { LayoutContainer, Content } from '@styles';
import Search from '@components/Search';
import { useSearch } from '@helpers/hooks';
import { Header, Title, LogoWrapper, SearchIcon } from './MainLayout.styles';

import LogoImage from './logo-adoption.svg';
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
        <Link href="/">
          <LogoWrapper>
            <LogoImage />
          </LogoWrapper>
        </Link>
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
