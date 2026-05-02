import React from 'react';
import {
  Box, Flex, Text, Select, SimpleGrid, Image, HStack, VStack, Button, Link
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import api from '../api';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const places = [
  {
    id: 1,
    name: 'Nyungwe Forest National Park',
    description: 'Explore the ancient rainforest and canopy walk.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1516422317184-215397955906?q=80&w=2068&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Kigali Convention Centre',
    description: 'Rwanda’s iconic landmark and hub of innovation.',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1589196001712-4217336f3223?q=80&w=2070&auto=format&fit=crop',
  },
];

function Discover() {
  return (
    <Box minH="100vh" bg="white">
      <Navbar activePage="discover" />

      <Box px={{ base: 6, md: 12 }} py={8}>
        <Text fontSize="2xl" fontWeight="700" color="gray.800" mb={6}>Discover Places</Text>

        {/* Filters */}
        <Flex gap={4} align="center" mb={10} flexWrap="wrap">
          <Select placeholder="location" w="200px" bg="#D9D9D9" border="none">
            <option value="kigali">Kigali</option>
          </Select>
          <Select placeholder="Category" w="200px" bg="#D9D9D9" border="none">
            <option value="forest">Forest</option>
          </Select>
          <Link ml="auto" fontWeight="600" textDecoration="underline">Nearby Places</Link>
        </Flex>

        <Flex gap={10} direction={{ base: 'column', lg: 'row' }}>
          
          {/* LEFT: Cards */}
          <Box flex="3">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {places.map((place) => (
                <Box 
                  key={place.id} 
                  as={RouterLink} 
                  to="/details" 
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{ transform: 'translateY(-8px)', textDecoration: 'none' }}
                >
                  <Image src={place.image} alt={place.name} w="100%" h="300px" objectFit="cover" borderRadius="lg" mb={3} />
                  <Text fontWeight="700" fontSize="xl" mb={1} color="gray.800">{place.name}</Text>
                  <Text fontSize="md" color="gray.600" mb={3}>{place.description}</Text>
                  
                  <Flex justify="space-between" align="center">
                    <VStack align="start" spacing={0}>
                        <HStack spacing={1}>
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} color="#121E0A" boxSize={3} />
                            ))}
                        </HStack>
                        <Text fontWeight="800" fontSize="xl" color="#121E0A">{place.rating.toFixed(1)}</Text>
                    </VStack>
                    
                    <Button 
                        bg="#121E0A" 
                        color="white" 
                        px={8} 
                        _hover={{ bg: "#B8D433", color: "black" }}
                    >
                        View
                    </Button>
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* RIGHT: AI Sidebar */}
          <Box flex="1" p={6} textAlign="center">
            <Text fontSize="xl" fontWeight="700" color="#121E0A" mb={10}>AI overview</Text>
            <Box mt="100px" p={4} border="1px dashed #B8D433" borderRadius="md">
               <Text color="gray.600" fontStyle="italic">AI is analyzing community trends for this region...</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Discover;