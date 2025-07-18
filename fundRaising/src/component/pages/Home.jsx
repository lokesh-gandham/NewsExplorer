import  { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  Rating,
  InputBase,
  IconButton,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import section1 from '../../assets/images/section1-1.jpg';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { Anchor, Rowing } from '@mui/icons-material';
  const cardData = {
  Medical: [
    { title: 'Card A1', category: 'Cat1' },
    { title: 'Card B1', category: 'Cat2' },
    { title: 'Card C1', category: 'Cat3' },
    { title: 'Card D1', category: 'Cat1' },
  ],
  Memorial: [
    { title: 'Card A1', category: 'Cat1' },
    { title: 'Card D1', category: 'Cat1' },
  ],
  NonProfits: [{ title: 'Card B1', category: 'Cat2' }],
  Others: [{ title: 'Card C1', category: 'Cat3' }],
};
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('Medical');

  const filteredCards = cardData[selectedCategory];

  const data = [
    {
      name: 'John Doe',
      date: 'June 20, 2025',
      rating: 4.5,
      description: 'This is a short review or description of the card content.',
    },
    {
      name: 'Jane Smith',
      date: 'June 18, 2025',
      rating: 3,
      description: 'Another comment that describes something important.',
    },
    {
      name: 'Lokesh',
      date: 'June 10, 2025',
      rating: 5,
      description: 'Excellent service and great user experience!',
    },
    {
      name: 'Anjali Sharma',
      date: 'June 25, 2025',
      rating: 4,
      description: 'The process was smooth and support was excellent.',
    },
    {
      name: 'Raj Kumar',
      date: 'June 5, 2025',
      rating: 3.5,
      description: 'Helpful platform with a great mission.',
    },
     {
      name: 'John Doe',
      date: 'June 20, 2025',
      rating: 4.5,
      description: 'This is a short review or description of the card content.',
    },
    {
      name: 'Jane Smith',
      date: 'June 18, 2025',
      rating: 3,
      description: 'Another comment that describes something important.',
    },
    {
      name: 'Lokesh',
      date: 'June 10, 2025',
      rating: 5,
      description: 'Excellent service and great user experience!',
    },
    {
      name: 'Anjali Sharma',
      date: 'June 25, 2025',
      rating: 4,
      description: 'The process was smooth and support was excellent.',
    },
    {
      name: 'Raj Kumar',
      date: 'June 5, 2025',
      rating: 3.5,
      description: 'Helpful platform with a great mission.',
    }
  ];

  const cardsPerPage = 3;
  const maxIndex = Math.max(0, data.length - cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <Box>
      {/* Section 1: Hero Split with Card */}
      <Box sx={{ backgroundColor: '#fce4f6', py: 8 }}>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            wrap="nowrap"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
              <Box >
                <br/><br/>
              <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#9B177E',
                textTransform: 'none',
                fontFamily: 'AvenierLtPro-medium',
                fontSize: '16px',
                width: '260px',
                height: '45px',
                ml: 2,
                borderRadius: '25px',
              }}

            >
              Trusted by Millions Since 2011
            </Button>
            <br/><br/>
            </Box>
              <Box
                sx={{
                  pr: { md: 4 },
                  borderRight: { md: '2px solid #9B177E' },
                  height: '100%',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#9B177E',
                    fontWeight: 'bold',
                    fontFamily:'AvenierLtPro-medium',
                    mb: 2,
                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  }}
                >
                  Welcome to SaveHeart
                </Typography>
                <br/>
                <Typography
                  variant="h6"
                      sx={{ fontWeight: 700, color: '#333', mb: 1, fontFamily: 'avenirltpro-medium' }}
                >
                  Join hands to support causes that matter.
                </Typography>
                <br/><br/>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    fontFamily: 'avenirltpro-regular',
                    mb: 3,
                  }}
                >
                  SaveHeart is India’s most transparent and fast-growing<br/> crowdfunding platform.
                  Raise funds easily and reach the people who care.
                </Typography>
                <br/><br/><br/>
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
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Card
                  sx={{
                    width: 592.5,
                    height: 592.5,
                    borderRadius: 3,
                    boxShadow: 6,
                    overflow: 'hidden',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src={section1}
                    alt="Campaign visual"
                    sx={{ width: '100%', height: 260, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, color: '#333', mb: 1, fontFamily: 'avenirltpro-medium' }}
                    >
                      Trusted by Thousands
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#555',
                        fontSize: '16px',
                        lineHeight: 1.6,
                        fontFamily: 'avenirltpro-regular',
                      }}
                    >
                      SaveHeart is India’s most transparent and fast-growing crowdfunding platform.
                      Raise funds easily and reach the people who care.
                    </Typography>
                  </CardContent>
                </Card>
                <Box
                  sx={{
                    position: 'absolute',
                    left: -20,
                    bottom: 32,
                    backgroundColor: '#9B177E',
                    color: '#fff',
                    px: 2,
                    py: 1,
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    boxShadow: 2,
                  }}
                >
                  0% Platform Fees
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2: Carousel Card */}
      <Box sx={{ backgroundColor: '#F3F4F6', py: 6, position: 'relative' }}>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            component="a"
            href="#"
            variant="contained"
            color="secondary"
            startIcon={<GradeIcon />}
            sx={{ textTransform: 'none', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <Typography variant="body1">4.5 | 28K+ Reviews</Typography>
          </Button>
          <Box sx={{ py: 2 }} />
          <Typography variant="h4" sx={{ font: 'AvenirLtPro-Medium', color: '#212121', fontWeight: 600, mb: 2 }}>
            What Our Users Say
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.disabled' }}>
            Join Thousands of satisfied users who trust Saveheart for their Fundraising needs
          </Typography>
          <Box sx={{ py: 2 }} />
          <Button
            component="a"
            href="#"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: 'none', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
          >
            Google Checks Reviews
          </Button>

          {/* Carousel */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
            <IconButton onClick={handlePrev} sx={{ mx: 2, backgroundColor: '#fff', boxShadow: 2 }}>
              <ArrowBackIosNewIcon />
            </IconButton>

            <Box sx={{ display: 'flex', gap: 2 }}>
              {data.slice(currentIndex, currentIndex + cardsPerPage).map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    minWidth: 350,
                    maxWidth: 300,
                    boxShadow: 3,
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.date}
                    </Typography>
                    <Rating value={item.rating} precision={0.5} readOnly sx={{ mt: 1 }} />
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <IconButton onClick={handleNext} sx={{ mx: 2, backgroundColor: '#fff', boxShadow: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Other Sections */}
      <Box sx={{ backgroundColor: '#fff', py: 6 }}>
        <Container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <Typography variant="h4" sx={{ fontWeight: 600,mb:1}}>
            Trending Campaigns
          </Typography>
          <Typography variant='body1' sx={{mb:3}} >Join thousands of supporters in making a difference</Typography>
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 800,
        border: '1px solid #ccc',
        borderRadius: '25px',
        backgroundColor: '#fff',
        pl: 2, // Left padding for input
      }}
    >
      <InputBase
        sx={{
          flex: 1,
          py: 1,
          fontSize: '1rem',
        }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton
        sx={{
          backgroundColor: 'orange',
          color: '#fff',
          borderRadius: '50%',
          p: 1.2,
          m: 0.5, // smaller margin
          '&:hover': {
            backgroundColor: '#ff9800',
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Box>
    <Box sx={{ p: 3 }}>
      {/* Filter Buttons */}
      <Stack direction="row" spacing={2} mb={3}>
        {['Medical', 'Memorial', 'NonProfits', 'Others'].map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Card Carousel */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          scrollbarWidth: 'none', // hide scrollbar Firefox
          '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar Chrome
        }}
      >
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 250,
              flexShrink: 0,
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {card.category}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    <Typography variant='body2'href='http:/google.com' sx={{
    textDecoration: 'none',
    color: 'primary.main',
    '&:hover': {
      textDecoration: 'underline',
    },
  }}component="a">see more fundraisers</Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#f7f7f7', py: 6 }}>
        <Container>
          <Stack direction={'row'}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Why People Trust <Typography  variant='h4' sx={{ fontWeight: 600, mb: 2 }} color='#9B177E'>SaveHeart</Typography>
          </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#9B177E', color: '#fff', py: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Need help to setup your free fundraiser?
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#9B177E',
            px: 4,
            py: 1.5,
            borderRadius: '25px',
            fontWeight: 600,
            '&:hover': { backgroundColor: '#fce4f6' },
          }}
        >
          <CallIcon />
          <Typography> Request a Call</Typography>
        </Button>
      </Box>
      <Footer/>
    </Box>
  );
}

export default Home;