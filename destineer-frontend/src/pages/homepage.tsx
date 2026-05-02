import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  extendTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const theme = extendTheme({
  colors: {
    brand: {
      500: '#B8D433',
      600: '#9DB32B',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

const MotionBox = motion(Box);

function Homepage() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        w="100vw"
        maxW="100%"
        overflowX="hidden"
        position="relative"
        bgImage="url('/homepage.jpeg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.55)"
          zIndex="1"
        />

        <Box position="relative" zIndex="2" w="100%">
          <Navbar />
        </Box>

        <Flex
          position="relative"
          zIndex="2"
          minH="calc(100vh - 80px)"
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
          px={{ base: 4, sm: 6, md: 10 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Text
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="800"
              color="white"
              lineHeight="1.2"
              mb={{ base: 6, md: 8 }}
            >
              Explore the Land of Thousand <br /> Hills
            </Text>

            <Button
              size={{ base: 'md', md: 'lg' }}
              bg="brand.500"
              color="black"
              px={{ base: 6, md: 12 }}
              py={{ base: 5, md: 8 }}
              fontSize={{ base: 'md', md: 'xl' }}
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                bg: 'brand.600',
                transform: 'scale(1.03)',
              }}
              transition="all 0.2s ease"
            >
              Discover
            </Button>
          </MotionBox>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;