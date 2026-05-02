import React from 'react';
import { Flex, Stack, Link, Image } from '@chakra-ui/react';




function Navbar() {
  return (
    <Flex
      as="nav"
      position="relative"
      zIndex="10"
      w="100%"
      px={{ base: 4, md: 10 }}
      py={{ base: 4, md: 6 }}
      align="center"
      justify="space-between"
      bg="rgba(18, 30, 10, 0.85)"
      boxShadow="0px 10px 30px rgba(0,0,0,0.25)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      overflowX="hidden"
    >
      <Image
        src="/logos.svg"
        alt="Destineer AI"
        h={{ base: "14px", sm: "16px", md: "20px" }}
        flexShrink={0}
      />

      <Stack
        direction="row"
        spacing={{ base: 3, sm: 5, md: 10 }}
        align="center"
        whiteSpace="nowrap"
        flexShrink={0}
      >
        <Link color="brand.500" fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
          Home
        </Link>

        <Link color="white" fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
          Discover
        </Link>

        <Link color="white" fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
          Contact Us
        </Link>
      </Stack>
    </Flex>
  );
}

export default Navbar;