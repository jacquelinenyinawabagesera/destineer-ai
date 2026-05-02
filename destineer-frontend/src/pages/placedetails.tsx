import React, { useState } from 'react';
import {
  Box, Flex, Text, Button, HStack, VStack, 
  Container, Textarea, Avatar, Divider, IconButton, Input, Image
} from '@chakra-ui/react';
import { StarIcon, AttachmentIcon, ChatIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';

function PlaceDetails() {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);

  const place = {
    name: "Nyungwe Forest National Park",
    description: "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teeming with wildlife, including a small population of chimpanzees as well as 12 other species of primate.",
    location: "Southern Province, Rwanda",
  };

  return (
    <Box minH="100vh" bg="white">
      {/* 1. Header with Navbar */}
      <Box bg="#121E0A" pb={10}>
         <Navbar activePage="discover" />
      </Box>

      <Container maxW="container.lg" mt={-5}>
        {/* TOP SECTION: Information */}
        <Box py={8}>
            <VStack align="start" spacing={1} mb={8}>
                <Text fontSize="sm" fontWeight="bold" color="brand.500" letterSpacing="widest">DESTINATION</Text>
                <Text fontSize="4xl" fontWeight="800" color="gray.800">{place.name}</Text>
                <Text color="gray.500" fontSize="lg">{place.location}</Text>
            </VStack>

            {/* AI Insight Box */}
            <Box bg="#F4F9E9" borderLeft="4px solid #B8D433" p={6} borderRadius="md" mb={8}>
              <HStack mb={2}>
                <Text fontSize="xl">✨</Text>
                <Text fontWeight="bold">AI Community Insight</Text>
              </HStack>
              <Text fontSize="md" color="gray.700">
                "Our AI detects that visitors love the canopy walk but suggest booking at least 2 days in advance. 
                The community currently ranks the 'Igishigishigi Trail' as the top-rated hidden path for 2024."
              </Text>
            </Box>

            <Text fontSize="xl" fontWeight="700" mb={4}>About this place</Text>
            <Text color="gray.600" fontSize="lg" lineHeight="tall" mb={12}>
                {place.description}
            </Text>

            <Divider borderColor="gray.200" mb={12} />

            {/* BOTTOM SECTION: User Engagement (Full Width) */}
            <Box>
                <Text fontSize="2xl" fontWeight="800" mb={8}>Community Experiences</Text>

                {/* 1. Post a Review / Upload Section */}
                <Box bg="gray.50" p={6} borderRadius="xl" mb={12}>
                    <Text fontWeight="bold" mb={4}>Share your experience & Upload photos/videos</Text>
                    <VStack align="stretch" spacing={4}>
                        <HStack spacing={1}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <StarIcon 
                                    key={i} 
                                    cursor="pointer" 
                                    boxSize={6}
                                    color={i <= rating ? "yellow.400" : "gray.300"} 
                                    onClick={() => setRating(i)}
                                />
                            ))}
                            <Text fontSize="sm" color="gray.500" ml={2}>Rate this place</Text>
                        </HStack>
                        
                        <Textarea 
                            placeholder="Tell the community about your visit..." 
                            bg="white"
                            border="1px solid"
                            borderColor="gray.200"
                            h="120px"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />

                        <Flex justify="space-between" align="center">
                            <Button leftIcon={<AttachmentIcon />} variant="outline" borderColor="gray.300" size="md">
                                Upload Media
                            </Button>
                            <Button 
                                bg="#121E0A" 
                                color="white" 
                                px={10} 
                                borderRadius="full"
                                _hover={{bg: "#B8D433", color: "black"}}
                            >
                                Post Review
                            </Button>
                        </Flex>
                    </VStack>
                </Box>

                {/* 2. Display Reviews with Reply Feature */}
                <VStack align="stretch" spacing={10} pb={20}>
                    {/* Sample Review 1 */}
                    <Box>
                        <HStack mb={4} justify="space-between">
                            <HStack>
                                <Avatar size="md" name="Jean Luc" />
                                <VStack align="start" spacing={0}>
                                    <Text fontWeight="bold">Jean-Luc Nkurunziza</Text>
                                    <HStack spacing={1}>
                                        {[1,2,3,4,5].map(i => <StarIcon key={i} boxSize={3} color="yellow.400" />)}
                                        <Text fontSize="xs" color="gray.400" ml={2}>2 days ago</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </HStack>
                        <Text fontSize="lg" color="gray.700" mb={4}>
                            The canopy walk is a must-do! Here is a photo I took of the valley.
                        </Text>
                        {/* Example of an uploaded image within a review */}
                        <Image src="/homepage.jpeg" borderRadius="lg" maxH="400px" objectFit="cover" mb={4} />
                        
                        <HStack spacing={6}>
                            <Button leftIcon={<ChatIcon />} variant="ghost" size="sm" color="gray.500">Reply</Button>
                            <Text fontSize="sm" color="gray.400">12 people found this helpful</Text>
                        </HStack>

                        {/* Nested Reply Section */}
                        <Box ml={12} mt={4} borderLeft="2px solid" borderColor="gray.100" pl={6}>
                            <HStack mb={2}>
                                <Avatar size="xs" name="Sarah K" />
                                <Text fontWeight="bold" fontSize="sm">Sarah K.</Text>
                            </HStack>
                            <Text fontSize="sm" color="gray.600">Great photo! Did you see any chimpanzees during your walk?</Text>
                            <Input placeholder="Write a reply..." size="sm" mt={3} borderRadius="full" bg="gray.50" />
                        </Box>
                    </Box>

                    <Divider />

                    {/* Sample Review 2 */}
                    <Box>
                        <HStack mb={4}>
                            <Avatar size="md" name="Innocent B" />
                            <VStack align="start" spacing={0}>
                                <Text fontWeight="bold">Innocent Bahati</Text>
                                <HStack spacing={1}>
                                    {[1,2,3,4].map(i => <StarIcon key={i} boxSize={3} color="yellow.400" />)}
                                    <Text fontSize="xs" color="gray.400" ml={2}>5 days ago</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                        <Text fontSize="lg" color="gray.700" mb={4}>
                            Beautiful greenery but very rainy. Bring waterproof gear!
                        </Text>
                        <Button leftIcon={<ChatIcon />} variant="ghost" size="sm" color="gray.500">Reply</Button>
                    </Box>
                </VStack>
            </Box>
          </Box>
      </Container>
    </Box>
  );
}

export default PlaceDetails;