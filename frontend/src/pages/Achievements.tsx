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
  let achievement_data = [
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'STRONG RETURN', description: 'Hold XX Gojo stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'But that's how losers think', description: 'Hold XX Kashimo stock for atleast a week', isCompleted: false},
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Ah yes, my achievements technique', description: 'Hold XX Sukuna stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Make it close but win again', description: 'Hold XX Yuta stock for atleast a week', isCompleted: false},
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'A cog in a stock machine', description: 'Hold XX Yuji stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'I'm.. a comedian!', description: 'Hold XX Takaba stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'It feels better than I expected', description: 'Hold XX Higuruma stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'NOT DEAD YET', description: 'Hold XX Nobara stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'With this treasure I summon...', description: 'Hold XX Megumi stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Another stock on par with Toji Zenin was realized', description: 'Hold XX Maki stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'All for the sake of my evil plan', description: 'Hold XX Kenjaku stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'ALWAYS BET ON HAKARI', description: 'Hold XX Hakari stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'They/Them stock got me feeling different', description: 'Hold XX Uraume stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Invest in Mei Mei instead! - UiUi', description: 'Hold XX UiUi stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'SHIESTY SORCERER', description: 'Hold XX Ino stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Save Jujutsu society...Kusakabe!', description: 'Hold XX Kusakabe stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'The stock that went toe to toe with Gojo Satoru!', description: 'Hold XX Miguel stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'We are the exception!', description: 'Hold XX Todo stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Best Brother', description: 'Hold XX Choso stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'I'm putting everything into this!', description: 'Hold XX Miwa stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'I'm going to meet up with everyone!', description: 'Hold XX Mechamaru stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'I'm on the side with money, of course', description: 'Hold XX Mei Mei stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Chain smokin' hot', description: 'Hold XX Shoko stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'It's just...so peak', description: 'Hold XX Panda stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'SHIT YOURSELF', description: 'Hold XX Inumaki stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Mommy?', description: 'Hold XX Utahime stock for atleast a week', isCompleted: false },
    { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'You've got quite the mouth, description: 'Hold XX Gakuganji stock for atleast a week', isCompleted: false },
     { src: 'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', achievementTitle: 'Mei Mei Certified', description: 'Have atleast 10,000 in assets', isCompleted: false },



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
