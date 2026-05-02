import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, extendTheme, Box, Flex, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// COMPONENTS & PAGES
import Navbar from './components/Navbar';
import Discover from './pages/discover'; 
import PlaceDetails from './pages/placedetails';

const theme = extendTheme({
  colors: {
    brand: { 500: '#B8D433', 600: '#9DB32B' },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

const MotionBox = motion(Box);

// HOME COMPONENT (Hero Section)
const Home = () => (
  <Box
    h="100vh"
    w="100%"
    position="relative"
    bgImage="url('/homepage.jpeg')" 
    bgPosition="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    overflow="hidden"
  >
    <Box position="absolute" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" zIndex="1" />
    
    <Navbar activePage="home" />

    <Flex position="relative" zIndex="2" h="65vh" align="center" justify="center" direction="column" textAlign="center" px={4}>
      <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Text fontSize={{ base: '3xl', md: '7xl' }} fontWeight="800" color="white" lineHeight="1.1" mb={8}>
          Explore the Land of <br /> Thousand Hills
        </Text>

        <Button 
          as={RouterLink} 
          to="/discover" 
          size="lg" 
          bg="brand.500" 
          color="black" 
          px={12} 
          py={8} 
          fontSize="xl"
          fontWeight="bold" 
          borderRadius="md"
          _hover={{ bg: 'brand.600', transform: 'scale(1.05)', textDecoration: 'none' }}
        >
          Discover
        </Button>
      </MotionBox>
    </Flex>
  </Box>
);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/details" element={<PlaceDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;