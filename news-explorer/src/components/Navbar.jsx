import * as React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCustomTheme } from '../context/ThemeContext';

const pageLinks = [
  { name: 'Home', path: '/' },
  { name: 'Bussiness', path: '/bussiness' },
  { name: 'Sports', path: '/sports' },
  { name: 'Education', path: '/education' },
  { name: 'Entertainment', path: '/entertainment' },
  {name:'Technology',path:'/technology'}
];

export default function Navbar() {
  const { mode, toggleMode } = useCustomTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const openUserMenu = Boolean(anchorElUser);

  const handleUserClick = (e) => setAnchorElUser(e.currentTarget);
  const handleUserClose = () => setAnchorElUser(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 240 }}>
      <List>
        {pageLinks.map(({ name, path }) => (
          <ListItemButton
            key={name}
            component={Link}
            to={path}
            selected={location.pathname === path}
          >
            <ListItemText primary={name} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        <ListItemButton component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItemButton>
        <ListItemButton component={Link} to="/register">
          <ListItemText primary="Register" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: mode === 'dark' ? '#212121' : '#fff' }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            onClick={() => setOpenDrawer(true)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon sx={{ color: mode === 'dark' ? '#fff' : '#9B177E' }} />
          </IconButton>

          {/* Logo & Brand */}
          <ArticleIcon
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: mode === 'dark' ? '#f0f0f0' : '#9B177E',
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'AvenierLtPro-medium',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: mode === 'dark' ? '#f0f0f0' : '#9B177E',
              textDecoration: 'none',
            }}
          >
            NewsExplorer
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pageLinks.map(({ name, path }) => {
              const active = location.pathname === path;
              return (
                <Button
                  key={name}
                  component={Link}
                  to={path}
                  sx={{
                    mx: 0.5,
                    px: 2,
                    borderRadius: '20px',
                    backgroundColor: active ? '#9B177E' : 'transparent',
                    color: active
                      ? '#fff'
                      : mode === 'dark'
                      ? '#f0f0f0'
                      : '#212121',
                    '&:hover': {
                      backgroundColor: active ? '#9B177E' : '#fce4f6',
                      color: mode === 'dark' ? '#212121' : '#9B177E',
                    },
                  }}
                >
                  {name}
                </Button>
              );
            })}
          </Box>

          {/* Right Side Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            {/* Theme Toggle */}
            <Button
              onClick={toggleMode}
              variant="outlined"
              sx={{
                ml: 2,
                color: mode === 'dark' ? '#fff' : '#9B177E',
                borderColor: '#9B177E',
                textTransform: 'none',
              }}
            >
              {mode === 'dark' ? 'Dark' : 'Light'}
            </Button>

            {/* Search Icon */}
            <IconButton
              onClick={() => setShowSearch((prev) => !prev)}
              sx={{ ml: 1, color: mode === 'dark' ? '#fff' : '#9B177E' }}
            >
              <SearchIcon />
            </IconButton>

            {/* Avatar */}
            <IconButton onClick={handleUserClick} sx={{ ml: 1 }}>
              <Avatar alt="User" sx={{ bgcolor: mode === 'dark' ? '#9B177E' : undefined }} />
            </IconButton>

            {/* Avatar Dropdown */}
            <Menu anchorEl={anchorElUser} open={openUserMenu} onClose={handleUserClose}>
              <MenuItem onClick={() => { handleUserClose(); navigate('/login'); }}>
                Login
              </MenuItem>
              <MenuItem onClick={() => { handleUserClose(); navigate('/register'); }}>
                Register
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>

        {/* Search Input */}
        {showSearch && (
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{
              px: 2,
              py: 2,
              backgroundColor: mode === 'dark' ? '#121212' : '#ffffff',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <TextField
              fullWidth
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                maxWidth: 1400,
                mx: 'auto',
                fontFamily: 'avenirltpro-medium',
                '& .MuiOutlinedInput-root': {
                  fontSize: '16px',
                  borderRadius: '25px',
                  backgroundColor: mode === 'dark' ? '#1e1e1e' : '#fff',
                  '& fieldset': {
                    borderColor: mode === 'dark' ? '#555' : '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#9B177E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#9B177E',
                    borderWidth: '2px',
                  },
                },
                '& input': {
                  color: mode === 'dark' ? '#f0f0f0' : '#212121',
                },
              }}
            />
          </Box>
        )}
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
}
