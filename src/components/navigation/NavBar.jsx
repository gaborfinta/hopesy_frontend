import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import {  NavLink} from "react-router-dom";

import ProfileAvatar from "../display/profileAvatar";
import UserContext from '../../contexts/UserContext';

import { styles } from '../../style';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    listStyle: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      textDecoration: 'none'
  }
  },
  appBar: {
    backgroundColor: styles.default
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const userData = useContext(UserContext);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/profile" className={classes.link}>
          Adatlap
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/logout" className={classes.link}>
            Kijelentkezés
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/events" className={classes.link}>
          <p>Adománygyűjtés</p>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/donaters" className={classes.link}>
          <p>Adakozók</p> 
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/faqs" className={classes.link}>
        <p>Rólunk</p>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
          <ProfileAvatar userData={userData}/>
          <p>Adatlap</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
            <NavLink to="/events" className={classes.link}>
              <img src="./images/logo3.png" width="100" alt="logo" /> 
            </NavLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <Button color="inherit">
              <NavLink to="/events" className={classes.link}>
                Adománygyűjtés
              </NavLink>
            </Button>
            
            <Button color="inherit">
              <NavLink to="/donaters" className={classes.link}>
              Adakozók
              </NavLink>
            </Button>
            
            <Button color="inherit">
              <NavLink to="/faqs" className={classes.link}>
                Rólunk
              </NavLink>
            </Button>
            
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ProfileAvatar userData={userData}  />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}