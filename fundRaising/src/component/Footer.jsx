import {
  Box,
  Typography,
  Button,
  Stack
} from '@mui/material';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png'
import paytm from '../assets/images/paytm.png'
import googleplay from '../assets/images/googleplay.png'
import appstore from '../assets/images/appstore.png'
import fund from '../assets/images/fundrasing.jpeg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Main Footer Content */}
      <Box sx={{ backgroundColor: 'white', px: 6, py: 4 }}>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
          
          {/* Section 1 */}
          <Box sx={{ width: 180, mb: 3 }}>
            <Stack spacing={1} sx={{ fontFamily: 'AvenierLtPro-medium' }}>
              <Typography variant='body2'>SaveHeart</Typography> 
              <Typography variant='body2' color='#9B177E'>About Us</Typography> 
              <Typography variant='body2' color='#9B177E'>Press and Media</Typography> 
              <Typography variant='body2' color='#9B177E'>Team</Typography> 
              <Typography variant='body2' color='#9B177E'>Careers</Typography> 
              <Typography variant='body2' color='#9B177E'>Contact</Typography> 
              <Typography variant='body2' color='#9B177E'>Thank you</Typography> 
              <Typography variant='body2' color='#9B177E'>Resources</Typography> 
            </Stack>
          </Box>

          {/* Section 2 */}
          <Box sx={{ width: 280, mb: 3 }}>
            <Stack spacing={2}>
              <Typography variant='body1'>Singapore Office Address</Typography> 
              <Typography variant='body2' color='text.disabled'>
                Milaap Social Ventures (International) Pte. Ltd.
                28 Bukit Pasoh Road, YWCA Fort Canning Lodge,
                Singapore 089842
              </Typography>
              <Typography>Supported By</Typography>
              <Stack direction="row" spacing={1}>
                <Box component="img" src={visa} alt="Visa" sx={{ height: 22, width: 49 }} />
                <Box component="img" src={paytm} alt="Paytm" sx={{ height: 22, width: 49 }} />
                <Box component="img" src={mastercard} alt="Mastercard" sx={{ height: 22, width: 49 }} />
              </Stack>
            </Stack>
          </Box>

          {/* Section 3 */}
          <Box sx={{ width: 260, mb: 3 }}>
            <Link to="/register">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#9B177E',
                  color: '#fff',
                  textTransform: 'none',
                  fontFamily: 'avenirltpro-medium',
                  fontSize: '16px',
                  width: '230px',
                  height: '45px',
                  borderRadius: '25px',
                  '&:hover': {
                    backgroundColor: '#801264',
                  },
                }}
              >
                Start Raising Fund
              </Button>
            </Link>
            <Stack direction="row" spacing={2} mt={3}>
              <Typography variant='body2' color='#9B177E'>Pricing</Typography>
              <Typography variant='body2' color='#9B177E'>Ratings</Typography>
              <Typography variant='body2' color='#9B177E'>FAQs & Tips</Typography>
            </Stack>
          </Box>

          {/* Section 4 */}
          <Box sx={{ width: 280, mb: 3 }}>
            <Stack alignItems="center" spacing={2}>
              <Box component="img" src={fund} alt="Fundraising" sx={{ height: 187, width: 189, objectFit: 'cover', borderRadius: 2, boxShadow: 3 }} />
              <Typography variant='body2' color='text.disabled' textAlign="center" px={2}>
                Set up, manage and promote your fundraiser with Milaap app
              </Typography>
              <Typography color='#9B177E'>Download now!</Typography>
              <Box component="img" src={googleplay} alt="Google Play" sx={{ height: 43, width: 145 }} />
              <Box component="img" src={appstore} alt="App Store" sx={{ height: 43, width: 145 }} />
            </Stack>
          </Box>

        </Stack>
      </Box>

      {/* Copyright Section */}
      <Box sx={{ width: '100%', backgroundColor: '#393E46', color: 'white', textAlign: 'center', py: 2 }}>
        <Typography variant="body2">
          Security & Privacy | Conditions of use © 2010 - 2021 SaveHeart.org. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
