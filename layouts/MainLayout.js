import React from 'react';
import { LayoutContainer, Content } from '@styles';
import Search from '@components/Search';

const MainLayout = ({ children }) => (
  <LayoutContainer>
    <Search />
    <Content>{children}</Content>
  </LayoutContainer>
);

export default MainLayout;
