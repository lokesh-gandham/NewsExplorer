import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AdbIcon from '@mui/icons-material/Adb';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/images/avatar.jpeg';


const pageLinks = [
  { name: 'Home', path: '/' },
  { name: 'Donate', path: '/donate' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Code of Practice', path: '/code-of-practice' },
  { name: 'Contact us', path: '/contact-us' },
];
const settings = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
];

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showSearchBox, setShowSearchBox] = React.useState(false);
  const [currency, setCurrency] = React.useState('INR');
  const location = useLocation();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#ffffff', boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' }}>
        <Toolbar disableGutters sx={{ px: 2 }}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'AvenierLtPro-medium',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: '#9B177E',
              textDecoration: 'none',
            }}
          >
            <VolunteerActivismIcon /> SaveHeart
          </Typography>

          {/* Main navigation and controls */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
           {pageLinks.map(({ name, path }) => (
  <Link to={path} key={name} style={{ textDecoration: 'none' }}>
    <Box
      sx={{
        my: 1,
        mx: 1,
        px: 2,
        py: 1,
        borderRadius: '20px',
        backgroundColor: location.pathname === path ? '#9B177E' : 'transparent',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: location.pathname === path ? '#9B177E' : '#fce4f6',
        },
      }}
    >
      <Typography
        sx={{
          color: location.pathname === path ? '#fff' : '#212121',
          fontFamily: 'AvenierLtPro-medium',
          fontSize: '18px',
          textTransform: 'none',
        }}
      >
        {name}
      </Typography>
    </Box>
  </Link>
))}
            {/* Currency Toggle */}
            <Box
              onClick={toggleCurrency}
              sx={{
                ml: 2,
                width: 90,
                height: 36,
                backgroundColor: '#9B177E',
                borderRadius: '20px',
                position: 'relative',
                cursor: 'pointer',
                px: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'avenirltpro-medium',
                fontWeight: 600,
                color: '#fff',
                fontSize: '13px',
              }}
            >
              {currency === 'INR' ? (
                <Typography sx={{ zIndex: 1, ml: 'auto', mr: 2 }}>USD</Typography>
              ) : (
                <Typography sx={{ zIndex: 1, ml: 2, mr: 'auto'}}>INR</Typography>
              )}
              <Box
                sx={{
                  position: 'absolute',
                  top: '3px',
                  left: currency === 'INR' ? '3px' : 'calc(100% - 33px)',
                  width: '30px',
                  height: '30px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  color: '#9B177E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'left 0.3s ease',
                  zIndex: 2,
                }}
              >
              </Box>
            </Box>

            {/* Search Button */}
            <IconButton
              sx={{ color: '#9B177E', ml: 1 }}
              onClick={() => setShowSearchBox((prev) => !prev)}
            >
              <SearchIcon />
              <Typography sx={{ ml: 0.5, fontFamily: 'avenirltpro-medium', fontSize: '14px' }}>
                Search
              </Typography>
            </IconButton>

            {/* Start Raising Fund Button */}
            <Link to="/register">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#9B177E',
                color: '#fff',
                textTransform: 'none',
                fontFamily: 'AvenierLtPro-medium',
                fontSize: '16px',
                width: '230px',
                height: '45px',
                ml: 2,
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#801264',
                },
              }}

            >
              Start Raising Fund
            </Button>
            </Link>
          </Box>

          {/* Avatar placed at far right */}
          <Box sx={{ ml: 2, mr: 2, display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {settings.map(({ name, path }) => (
  <MenuItem key={name} onClick={handleCloseUserMenu}>
    <Link to={path} style={{ textDecoration: 'none', width: '100%' }}>
      <Typography color="#9B177E" textAlign="center">{name}</Typography>
    </Link>
  </MenuItem>
))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Search dropdown */}
      {showSearchBox && (
        <Box
          sx={{
            px: 2,
            py: 2,
            backgroundColor: '#ffffff',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
         <TextField
  placeholder="Search by name, cause or fundraiser..."
  variant="outlined"
  fullWidth
  sx={{
    maxWidth: 900,
    fontFamily: 'avenirltpro-medium',
    '& .MuiOutlinedInput-root': {
      fontSize: '16px',
      borderRadius: '25px',
      backgroundColor: '#fff',
      paddingRight: 1,
      '& fieldset': {
        borderColor: '#ccc',
      },
      '&:hover fieldset': {
        borderColor: '#9B177E',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#9B177E',
        borderWidth: '2px',
      },
    },
  }}
/>
        </Box>
      )}
    </>
  );
}

export default Navbar;