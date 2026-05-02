import React from 'react';
import { Flex, Text, Stack, Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex
      as="nav"
      position="relative"
      zIndex="10"
      px={{ base: 6, md: 10 }}
      py={5}
      align="center"
      justify="space-between"
      mx={{ base: 4, md: 12 }}
      mt={10}
      borderRadius="lg"
      bg="rgba(18, 30, 10, 0.85)"
      boxShadow="0px 10px 30px rgba(0,0,0,0.3)"
      border="1px solid rgba(255,255,255,0.1)"
    >
      {/* Destineer AI text logo */}
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="brand.500"
        fontFamily="'Georgia', serif"
        fontStyle="italic"
      >
        Destineer AI
      </Text>

      <Stack direction="row" spacing={10} align="center">
        <Link
          color="brand.500"
          fontWeight="600"
          _hover={{ color: 'white', textDecoration: 'none' }}
        >
          Home
        </Link>
        <Link
          color="white"
          fontWeight="600"
          _hover={{ color: 'brand.500', textDecoration: 'none' }}
        >
          Discover
        </Link>
        <Link
          color="white"
          fontWeight="600"
          _hover={{ color: 'brand.500', textDecoration: 'none' }}
        >
          Contact Us
        </Link>
      </Stack>
    </Flex>
  );
}

export default Navbar;