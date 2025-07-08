import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  Divider,
  IconButton,
  InputAdornment
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9B177E',
        p: 2,
      }}
    >
      <Card
        sx={{
          width: { xs: '100%', sm: 600, md: 900, lg: 1000 },
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          position: 'relative',
        }}
      >
        {/* Close Icon */}
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <CloseIcon
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              color: 'text.disabled',
              fontSize: 20,
              '&:hover': {
                color: '#801264',
              },
            }}
          />
        </Box>

        <CardContent>
          <Box component="form" noValidate autoComplete="off">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              divider={<Divider orientation={window.innerWidth < 900 ? "horizontal" : "vertical"} flexItem />}
              spacing={2}
            >
              {/* Left - Branding */}
              <Box
                sx={{
                  height: { xs: 'auto', md: '50vh' },
                  width: { xs: '100%', md: '30%' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: { xs: 3, md: 0 },
                }}
              >
                <Stack alignItems="center" spacing={1}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: '#9B177E',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> NewsExplorer
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.disabled',
                      textAlign: 'center',
                      maxWidth: 200,
                      fontFamily: 'Avenir',
                    }}
                  >
                    India’s largest News Site
                  </Typography>
                </Stack>
              </Box>

              {/* Right - Registration Form */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: { xs: '100%', md: '70%' },
                  px: { xs: 0, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    color: 'text.disabled',
                    fontFamily: 'Avenir',
                    textAlign: 'center',
                    mb: 2,
                  }}
                  variant="body2"
                >
                  Sign up & manage newsArticles & <br />
                  more
                </Typography>

                {/* Full Name */}
                <TextField
                  label="Full Name"
                  type="text"
                  variant="standard"
                  margin="dense"
                  fullWidth
                  sx={{
                    maxWidth: 400,
                    '& .MuiInputLabel-root': { fontFamily: 'Avenir' },
                    '& .MuiInputBase-input': { fontFamily: 'Avenir' },
                  }}
                />

                {/* Email */}
                <TextField
                  label="Email Address"
                  type="email"
                  variant="standard"
                  margin="dense"
                  fullWidth
                  sx={{
                    maxWidth: 400,
                    mt: 2,
                    '& .MuiInputLabel-root': { fontFamily: 'Avenir' },
                    '& .MuiInputBase-input': { fontFamily: 'Avenir' },
                  }}
                />

                {/* Password with toggle */}
                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  variant="standard"
                  margin="dense"
                  fullWidth
                  sx={{
                    maxWidth: 400,
                    mt: 2,
                    '& .MuiInputLabel-root': { fontFamily: 'Avenir' },
                    '& .MuiInputBase-input': { fontFamily: 'Avenir' },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Sign Up Button */}
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 3,
                    backgroundColor: '#9B177E',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontFamily: 'AvenierLtPro-medium',
                    width: '100%',
                    maxWidth: 400,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#801264',
                    },
                  }}
                >
                  Sign Up
                </Button>
                <br />

                {/* Already Registered */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.disabled', textAlign: 'center' }}
                  >
                    Already signed up with NewsExplorer?
                  </Typography>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#9B177E',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontFamily: 'AvenierLtPro-medium',
                        width: 80,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#801264',
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
