import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            aria-owns={anchorEl ? 'menu' : undefined}
            onClick={this.handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/drivers/1"
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/new-driver"
          >
            New Driver
          </MenuItem>
          <MenuItem
            onClick={this.handleClose}
            component={Link}
            to="/new-rider"
          >
            New Passenger
          </MenuItem>
        </Menu>
      </AppBar>
    );
  }
}

export default NavBar;
