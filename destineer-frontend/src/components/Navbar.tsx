import React from 'react';
import { Flex, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  activePage?: 'home' | 'discover' | 'contact';
}

function Navbar({ activePage = 'home' }: NavbarProps) {
  const activeColor = '#B8D433';
  const inactiveColor = 'white';

  const linkStyle = (page: string): React.CSSProperties => ({
    color: activePage === page ? activeColor : inactiveColor,
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '18px'
  });

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
      backdropFilter="blur(10px)"
      boxShadow="0px 10px 30px rgba(0,0,0,0.3)"
      border="1px solid rgba(255,255,255,0.1)"
    >
      <Text fontSize="2xl" fontWeight="bold" color="#B8D433" fontFamily="'Georgia', serif" fontStyle="italic">
        Destineer AI
      </Text>

      <Stack direction="row" spacing={10} align="center">
        <Link to="/" style={linkStyle('home')}>Home</Link>
        <Link to="/discover" style={linkStyle('discover')}>Discover</Link>
        <Link to="/contact" style={linkStyle('contact')}>Contact Us</Link>
      </Stack>
    </Flex>
  );
}

export default Navbar;