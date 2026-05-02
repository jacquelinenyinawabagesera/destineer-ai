import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  extendTheme
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
        h="100vh"
        w="100%"
        position="relative"
        bgImage="url('/homepage.jpeg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        overflow="hidden"
      >
        {/* Dark Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="1"
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <Flex
          position="relative"
          zIndex="2"
          h="65vh"
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
          px={4}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              fontSize={{ base: '3xl', md: '6xl' }}
              fontWeight="800"
              color="white"
              lineHeight="short"
              mb={8}
            >
              Explore the Land of Thousand <br /> Hills
            </Text>

            <Button
              size="lg"
              bg="brand.500"
              color="black"
              px={12}
              py={8}
              fontSize="xl"
              fontWeight="bold"
              borderRadius="md"
              _hover={{
                bg: 'brand.600',
                transform: 'scale(1.05)',
              }}
              transition="all 0.2s"
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