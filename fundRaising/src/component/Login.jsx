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
  InputAdornment,
  IconButton,
} from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
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
      }}
    >
      <Card
        sx={{
          width: 1000,
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
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              {/* Left - Branding */}
              <Box
                sx={{
                  height: '50vh',
                  width: '25%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                    <VolunteerActivismIcon /> SaveHeart
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
                    India’s largest crowdfunding site
                  </Typography>
                </Stack>
              </Box>

              {/* Right - Login Form */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: '75%',
                  px: 3,
                }}
              >
                <Typography
                  sx={{
                    color: 'text.disabled',
                    fontFamily: 'Avenir',
                    textAlign: 'center',
                  }}
                  variant="body1"
                >
                  Quickly login using
                </Typography>
                <br />
                <Stack spacing={3} direction={'row'}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'Blue',
                      borderRadius: '25px',
                      fontSize: '16px',
                      fontFamily: 'AvenierLtPro-medium',
                      width: '100px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#3B5998',
                      },
                    }}
                  >
                    Facebook
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#Dd4B39',
                      borderRadius: '25px',
                      fontSize: '16px',
                      fontFamily: 'AvenierLtPro-medium',
                      width: '100px',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#801264',
                      },
                    }}
                  >
                    Google
                  </Button>
                </Stack>

                {/* Mobile/Email Field with Get OTP */}
                <TextField
                  label="Mobile number / Email ID"
                  variant="standard"
                  margin="small"
                  fullWidth
                  sx={{
                    width: '400px',
                    mt: 3,
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Avenir',
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Avenir',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          disableRipple
                          sx={{
                            textTransform: 'none',
                            fontSize: '12px',
                            color: '#9B177E',
                            fontFamily: 'AvenirLtPro-medium',
                            minWidth: 'auto',
                            padding: 0,
                            '&:hover': {
                              backgroundColor: 'transparent',
                            },
                          }}
                          onClick={() => console.log('Get OTP clicked')}
                        >
                          Get OTP
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />

                {/* Password Field with Toggle */}
                <TextField
                  label="Password / OTP"
                  variant="standard"
                  margin="small"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  sx={{
                    width: '400px',
                    mt: 2,
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Avenir',
                    },
                    '& .MuiInputBase-input': {
                      fontFamily: 'Avenir',
                    },
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

                {/* Login Button */}
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 3,
                    backgroundColor: '#9B177E',
                    borderRadius: '25px',
                    fontSize: '16px',
                    fontFamily: 'AvenierLtPro-medium',
                    width: '400px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#801264',
                    },
                  }}
                >
                  Login
                </Button>
<br/>
                {/* Forgot Password */}
                <Button
                  component={Link}
                  to="/forgot-password"
                  variant="text"
                  sx={{
                    color: '#9B177E',
                    textTransform: 'none',
                    fontFamily: 'AvenirLtPro-medium',
                    fontSize: '14px',
                    padding: 0,
                    minWidth: 0,
                    mt: 1,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Forgot Password?
                </Button>
<br/>
                {/* Signup Prompt */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    mt: 3,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ marginRight: '12px', color: 'text.disabled' }}
                  >
                    New to SaveHeart? Sign up now, it's quick and free
                  </Typography>
                  <Link to="/register">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#9B177E',
                        borderRadius: '25px',
                        fontSize: '16px',
                        fontFamily: 'AvenierLtPro-medium',
                        width: '80px',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#801264',
                        },
                      }}
                    >
                      SignUp
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

export default Login;
