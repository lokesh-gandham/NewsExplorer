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

              {/* Right - Registration Form */}
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
                  variant="body2"
                >
                  Sign up & manage fundraisers, donations & <br />
                  more
                </Typography>

                {/* Full Name */}
                <TextField
                  label="Full Name"
                  type="text"
                  variant="standard"
                  margin="small"
                  fullWidth
                  sx={{
                    width: '400px',
                    mt: 2,
                    '& .MuiInputLabel-root': { fontFamily: 'Avenir' },
                    '& .MuiInputBase-input': { fontFamily: 'Avenir' },
                  }}
                />

                {/* Email */}
                <TextField
                  label="Email Address"
                  type="email"
                  variant="standard"
                  margin="small"
                  fullWidth
                  sx={{
                    width: '400px',
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
                  margin="small"
                  fullWidth
                  sx={{
                    width: '400px',
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
                    width: '400px',
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
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ marginRight: '12px', color: 'text.disabled' }}
                  >
                    Already signed up with SaveHeart?
                  </Typography>
                  <Link to="/login">
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
