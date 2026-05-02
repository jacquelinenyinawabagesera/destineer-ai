import React, { useState } from 'react';
import {
  Box, Flex, Text, Image, Button, HStack, VStack, 
  Container, Textarea, Avatar, Divider, SimpleGrid, IconButton
} from '@chakra-ui/react';
import { StarIcon, AddIcon, AttachmentIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';

function PlaceDetails() {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const place = {
    name: "Nyungwe Forest National Park",
    description: "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teeming with wildlife, including a small population of chimpanzees as well as 12 other species of primate.",
    location: "Southern Province, Rwanda",
    mainImage: "/homepage.jpeg",
  };

  return (
    <Box minH="100vh" bg="white">
      {/* 1. Header with Navbar */}
      <Box bg="#121E0A" pb={10}>
         <Navbar activePage="discover" />
      </Box>

      <Container maxW="container.xl" mt={-5}>
        <Flex gap={12} direction={{ base: "column", lg: "row" }}>
          
          {/* LEFT COLUMN: Info & Community Media */}
          <Box flex="2" py={8}>
            {/* Title Section */}
            <VStack align="start" spacing={1} mb={8}>
                <Text fontSize="sm" fontWeight="bold" color="brand.500" letterSpacing="widest">
                    DESTINATION
                </Text>
                <Text fontSize="4xl" fontWeight="800" color="gray.800">
                    {place.name}
                </Text>
                <Text color="gray.500" fontSize="lg">{place.location}</Text>
            </VStack>

            {/* AI INSIGHT CARD - Redesigned to not overlap */}
            <Box 
                bg="#F4F9E9" 
                borderLeft="4px solid #B8D433" 
                p={6} 
                borderRadius="md" 
                mb={10}
                boxShadow="sm"
            >
              <HStack mb={3}>
                <Text fontSize="xl">✨</Text>
                <Text fontWeight="bold" color="#2D3748">AI Community Insight</Text>
              </HStack>
              <Text fontSize="md" color="gray.700" lineHeight="tall">
                "Visitors highly recommend the 6:00 AM canopy walk for the best bird-watching. 
                Our AI detects a high 'hidden gem' rating for the nearby Uwinka trail which is 
                currently less crowded than the main entrance."
              </Text>
            </Box>

            <Box mb={10}>
                <Text fontSize="xl" fontWeight="700" mb={4}>About this place</Text>
                <Text color="gray.600" fontSize="lg" lineHeight="tall">
                    {place.description}
                </Text>
            </Box>

            {/* Community Gallery */}
            <Text fontSize="xl" fontWeight="700" mb={4}>Community Gallery</Text>
            <SimpleGrid columns={{base: 2, md: 3}} spacing={4} mb={10}>
               <Image src={place.mainImage} h="180px" w="100%" objectFit="cover" borderRadius="lg" />
               <Image src={place.mainImage} h="180px" w="100%" objectFit="cover" borderRadius="lg" />
               <Flex 
                  bg="gray.50" 
                  h="180px" 
                  borderRadius="lg" 
                  align="center" 
                  justify="center" 
                  direction="column" 
                  cursor="pointer" 
                  border="2px dashed"
                  borderColor="gray.300"
                  _hover={{bg: "gray.100"}}
               >
                  <AddIcon boxSize={6} color="gray.400" />
                  <Text fontSize="sm" fontWeight="bold" color="gray.500" mt={2}>Add Photos/Video</Text>
               </Flex>
            </SimpleGrid>
          </Box>

          {/* RIGHT COLUMN: Reviews sidebar */}
          <Box flex="1" py={8}>
            <Box position="sticky" top="20px" bg="white" p={6} borderRadius="2xl" border="1px solid" borderColor="gray.100" shadow="xl">
                <Text fontSize="xl" fontWeight="700" mb={6}>Community Reviews</Text>
                
                {/* Rate Input */}
                <VStack align="stretch" spacing={4} mb={8}>
                <HStack spacing={1}>
                    {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon 
                        key={i} 
                        cursor="pointer" 
                        boxSize={5}
                        color={i <= rating ? "yellow.400" : "gray.200"} 
                        onClick={() => setRating(i)}
                    />
                    ))}
                    <Text fontSize="sm" color="gray.500" ml={2}>Rate it</Text>
                </HStack>
                <Textarea 
                    placeholder="Share your experience..." 
                    focusBorderColor="brand.500"
                    bg="gray.50"
                    border="none"
                    h="120px"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Flex justify="space-between" align="center">
                    <IconButton aria-label="attach" icon={<AttachmentIcon />} variant="ghost" />
                    <Button bg="#121E0A" color="white" px={10} borderRadius="full" _hover={{bg: "#B8D433", color: "black"}}>
                    Post
                    </Button>
                </Flex>
                </VStack>

                <Divider mb={6} />

                {/* Comments List */}
                <VStack align="stretch" spacing={6} maxH="400px" overflowY="auto" pr={2}>
                    <Box>
                        <HStack mb={2}>
                        <Avatar size="sm" />
                        <Box>
                            <Text fontWeight="bold" fontSize="sm">Jean-Luc N.</Text>
                            <HStack spacing={1}>{ [1,2,3,4,5].map(i => <StarIcon key={i} boxSize={2} color="yellow.400" />) }</HStack>
                        </Box>
                        </HStack>
                        <Text fontSize="sm" color="gray.600">The chimpanzee trekking was life-changing!</Text>
                    </Box>

                    <Box>
                        <HStack mb={2}>
                        <Avatar size="sm" />
                        <Box>
                            <Text fontWeight="bold" fontSize="sm">Sarah K.</Text>
                            <HStack spacing={1}>{ [1,2,3,4].map(i => <StarIcon key={i} boxSize={2} color="yellow.400" />) }</HStack>
                        </Box>
                        </HStack>
                        <Text fontSize="sm" color="gray.600">Beautiful but bring a rain jacket. 🌧️</Text>
                    </Box>
                </VStack>
            </Box>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
}

export default PlaceDetails;