import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardContent,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CssBaseline,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import myImage from '../../assets/images/pricing.avif';
import pricing1 from '../../assets/images/pricing1.png';
import Footer from '../Footer';

function Pricing() {
  const [amount, setAmount] = useState(10000);
  const [currency, setCurrency] = useState('INR');

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: '100%',height:'100%', overflowX: 'hidden' }}>
        {/* Top Section */}
        <Box sx={{ height:'100%', backgroundColor: '#9B177E' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center', px: 2, py: 4 }}
          >
            <Box
              component="img"
              src={myImage}
              alt="Top"
              sx={{ height: { xs: 200, md: 300 }, width: { xs: '100%', md: 400 }, objectFit: 'cover', borderRadius: 2, boxShadow: 3 }}
            />
            <Box maxWidth={500} px={1}>
              <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                FREE FUNDRAISING FOR ALL!
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                <Box component="img" src={pricing1} alt="Platform Fees" sx={{ height: 60, width: 60, borderRadius: 2 }} />
                <Typography variant="h6" sx={{ color: 'white' }}>
                  PLATFORM FEES
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                Raise maximum funds for the cause you care about.
              </Typography>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: '#fff', color: '#9B177E', borderRadius: '25px', fontSize: '14px', textTransform: 'none', px: 3, py: 1, '&:hover': { backgroundColor: '#fce4f6' } }}
                >
                  Start Raising Fund
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>

        {/* Calculator Section */}
        <Box
          sx={{ backgroundColor: '#f4f4f4', px: 2, py: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Typography variant="h5" sx={{ color: '#9B177E', mb: 2, fontWeight: 600 }}>
            Fundraiser Goal Calculator
          </Typography>
          <Card sx={{ borderRadius: 2, boxShadow: 2, width: '100%', maxWidth: 600 }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                I want to raise
              </Typography>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }}>
                <FormControl fullWidth size="small">
                  <InputLabel>Amount</InputLabel>
                  <Select value={amount} onChange={(e) => setAmount(e.target.value)} label="Amount">
                    {[5000, 10000, 25000, 50000, 100000].map((amt) => (
                      <MenuItem key={amt} value={amt}>
                        ₹{amt.toLocaleString()}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Currency</InputLabel>
                  <Select value={currency} onChange={(e) => setCurrency(e.target.value)} label="Currency">
                    <MenuItem value="INR">INR (₹)</MenuItem>
                    <MenuItem value="USD">USD ($)</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
                Adjust amount with slider
              </Typography>
              <Slider
                value={amount}
                min={1000}
                max={100000}
                step={1000}
                onChange={(e, newValue) => setAmount(newValue)}
                valueLabelDisplay="auto"
                sx={{ color: '#9B177E' }}
              />
            </CardContent>
          </Card>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: '#9B177E', color: '#fff', borderRadius: '30px', px: 4, py: 1, fontSize: '14px', textTransform: 'none', '&:hover': { backgroundColor: '#801264' } }}
            >
              Calculate
            </Button>
          </Box>
        </Box>

        {/* FAQs Section */}
        <Box sx={{ px: 2, py: 4, backgroundColor: '#fff' }}>
          <Typography variant="h5" sx={{ color: '#9B177E', fontWeight: 600, textAlign: 'center', mb: 2 }}>
            Related FAQs
          </Typography>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {[{
              question: 'How much does Milaap charge?',
              answer: 'Milaap charges NO platform fees on donations. We rely on the generosity of our users to power the platform.',
            },
            {
              question: 'What are payment gateway charges and why is it charged?',
              answer: 'These are fees taken by banks/payment providers for processing transactions securely.',
            },
            {
              question: 'Is the free fundraising applicable for organizations and not-for-profits?',
              answer: 'Yes! It applies to individuals, groups, and verified non-profits equally.',
            },
            {
              question: 'Does Milaap help in outreach of campaigns?',
              answer: 'Yes. Milaap offers sharing tools and may guide you to increase visibility.',
            }].map((faq, index) => (
              <Accordion key={index} sx={{ boxShadow: 'none' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" fontWeight={600}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        {/* Footer */}
        <Box sx={{ backgroundColor: '#f1f1f1' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default Pricing;
