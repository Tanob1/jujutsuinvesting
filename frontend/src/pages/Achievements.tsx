import React, { useState } from "react";
import {
  Stack,
  Divider,
  chakra,
  Container,
  Icon,
  Box,
  Flex,
  GridItem,
  Button,
  useColorModeValue,
  Text,
  Heading,
  Image,
  Grid, // Import the Image component from next/image
} from '@chakra-ui/react'
import { IoMdCheckmarkCircle } from 'react-icons/io';


// isCompleted could be if its unlocked or not, maybe you can even add a progress bar?
export default function Achievements() {
  const achievement_data = [
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: true },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: true },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: true },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: true },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Achievements #', description: 'Some Stuff about this? Go crazy!', isCompleted: false },



    // Add more images as needed
  ];



  return (
    <Container maxW="7xl" mt={14} p={4}>
      <Stack>
        <Heading>
          Achievements
        </Heading>
        <Text>
          Must be logged in to show Achievements
        </Text>
      </Stack>
      <Divider mt={12} mb={12} />

      {/* Achievments Area */}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)', // 1 column for small screens
          sm: 'repeat(2, 1fr)', // 2 columns for small screens and up
          md: 'repeat(2, 1fr)', // 3 columns for medium screens and up
          lg: 'repeat(2, 1fr)', // 4 columns for large screens and up
          xl: 'repeat(3, 1fr)'  // 6 columns for extra large screens
        }}
        gap={10}
      >
        {achievement_data.map((achievement, index) => (
          <GridItem key={index}>
            <Flex
              maxW="sm"
              w="full"
              mx="auto"
              bg={achievement.isCompleted ? "green.500" : "gray.500"}
              _dark={{
                bg: achievement.isCompleted ? "green.400" : "gray.400",
              }}
              rounded="lg"
              overflow="hidden"
            >
              <Flex justifyContent="center" alignItems="center" w={12}>
                <Image src={achievement.src} />
              </Flex>

              <Box mx={-3} py={2} px={4}>
                <Box mx={3}>
                  <chakra.span
                    color={achievement.isCompleted ? "white" : "gray.600"}
                    _dark={{
                      color: achievement.isCompleted ? "white" : "gray.200",
                    }}
                    fontWeight="bold"
                  >
                    {achievement.achievementTitle}
                  </chakra.span>
                  <chakra.p
                    color={achievement.isCompleted ? "white" : "gray.600"}
                    _dark={{
                      color: achievement.isCompleted ? "white" : "gray.200",
                    }}
                    fontSize="sm"
                  >
                    {achievement.description}
                  </chakra.p>
                </Box>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  )
}
