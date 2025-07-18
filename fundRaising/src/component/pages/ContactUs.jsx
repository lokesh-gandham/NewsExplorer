import { Box, Stack, Typography, Tabs, Tab } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../Footer.jsx';
import myImage from '../../assets/images/contactus.avif';
import { useState } from 'react';

function ContactUs() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const locations = [
    {
      label: 'India',
      address: '123 MG Road, Bengaluru, Karnataka, India',
      email: 'support.in@milaap.org',
    },
    {
      label: 'USA',
      address: '456 Market Street, San Francisco, CA, USA',
      email: 'support.us@milaap.org',
    },
    {
      label: 'Singapore',
      address: '789 Orchard Road, Singapore',
      email: 'support.sg@milaap.org',
    },
  ];

  return (
    <div>
      <Box sx={{ width: '100%', height: '50vh', backgroundColor: '#9B177E' }}>
        <Stack
          spacing={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: '100%',
            px: 2,
          }}
        >
          {/* Text Section */}
          <Box sx={{ width: '50%' }}>
            <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="h6" sx={{ color: 'white' }}>
              We are here to help you and answer any questions you may <br />
              have. Here is how to reach us!
            </Typography>
          </Box>

          {/* Centered Image */}
          <Box
            component="img"
            src={myImage}
            alt="Contact Us Illustration"
            sx={{
              height: { xs: 200, md: 250 },
              width: { xs: '90%', md: 350 },
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Stack>
      </Box>

      {/* Location Tabs */}
      <Box sx={{ width: '100%', py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 2 }}
        >
          {locations.map((loc, index) => (
            <Tab
              key={loc.label}
              label={
                <Stack direction="row" alignItems="center" spacing={1}>
                  {selectedTab === index && <LocationOnIcon fontSize="small" />}
                  <span>{loc.label}</span>
                </Stack>
              }
            />
          ))}
        </Tabs>

        {/* Contact Info */}
        <Box textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>{locations[selectedTab].label}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{locations[selectedTab].address}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>Email: {locations[selectedTab].email}</Typography>
        </Box>
      </Box>
      <Box sx={{backgroundColor:'#91C8E4',width:'100%',padding:'40px 0px 40px 0px',
        display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Box padding={2} sx={{width:'80%'}}>
        <Stack spacing={2} direction={'column'}>
        <Typography variant='h4' fontFamily='AvenierLtPro-medium'>Join the conversation</Typography>
        <Typography variant='body1'>Join us on Facebook, Twitter, Instagram and YouTube as we share uplifting stories of successful fundraisers! </Typography>
      </Stack>
      </Box>
      </Box>

      <Footer />
    </div>
  );
}

export default ContactUs;
