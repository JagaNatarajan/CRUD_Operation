import React from 'react';
import {AppBar, Toolbar, styled} from '@mui/material';
import {NavLink} from 'react-router-dom';
const Header = styled(AppBar)`
  background: grey
`;
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: gold;
  text-decoration: none;
`;

const NavBar = () => {
  return (
     <Header position='static'>
        <Toolbar>
        <Tabs to='/'>CRUD OPERATION</Tabs>
          <Tabs to='/add'>Add User</Tabs>
          <Tabs to='/view'>View User</Tabs>
        </Toolbar>
     </Header>
  )
}

export default NavBar;