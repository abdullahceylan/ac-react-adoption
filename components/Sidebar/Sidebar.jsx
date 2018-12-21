import React from 'react';
import PropTypes from 'prop-types';
import { SidebarWrapper, Navigation, MenuList, MenuItem, MenuLink } from './Sidebar.styles';

const Sidebar = (props) => (
  <SidebarWrapper>
    <Navigation>
      <MenuList>
        <MenuItem>
          <MenuLink><a href="/">Home</a></MenuLink>
        </MenuItem>
      </MenuList>
    </Navigation>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  // bla: PropTypes.string,
};

Sidebar.defaultProps = {
  // bla: 'test',
};

export default Sidebar;
