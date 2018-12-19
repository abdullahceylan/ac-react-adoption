import React from 'react';
import { LayoutContainer, Content } from '@styles';

const MainLayout = ({ children }) => (
  <LayoutContainer>
    <Content>{children}</Content>
  </LayoutContainer>
);

export default MainLayout;
