import React, { useState } from "react";
import {
  Stack,
  Divider,
  chakra,
  Container,
  Grid, GridItem,
  Image,
  Skeleton,
  Box,
  Flex,
  Text,
  Spacer,
  Card,
  CardBody,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  useColorModeValue,
  Button,
  HStack
} from '@chakra-ui/react'

export default function Home() {
  const [BuysliderValue, setBuySliderValue] = useState(1)
  const [SellsliderValue, setSellSliderValue] = useState(1)
  const characters = [
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', name: 'Name' , price: 57, owned: 20},


    // Add more stock as needed
  ];
  return (
<Container maxW="7xl" mt={14} p={4}>
      <Stack gap={"20px"}>
        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          >
          Welcome to{' '}
          <Text as={'span'} color={'purple.400'}>
          Jujutsu Investing
          </Text>
        </Heading>
        <Text>
        Do you want to put your stocks in Gojo? Kashimo? Yuta? Whoever you want to invest in we have you covered, simply select who to invest in and invest! Their stock will go up if they are doing good or are winning against/beat someone. Their stock will go down if they are doing bad or losing against someone or are killed. Stocks close at 11pm EST on Wednesday(right before leaks drop) and reopen ASAP(within a day at most)
        </Text>
        <HStack>
        <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'purple'}
                bg={'purple.400'}
                _hover={{ bg: 'purple.500' }}
                as={'a'}
                href={'/signup'}
                >
                
                Sign Up
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={'a'}
                href={'https://www.reddit.com/r/Jujutsufolk/comments/1e17fxl/the_jujutsu_kaisen_stock_report_15/?'}>
                Official Stock Report
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={'a'}
                href={'https://docs.google.com/forms/d/e/1FAIpQLSfWVcNtQKfH30nhsetrvV7lHol_VL9YYRA7KV59yf8H6GL8Ug/viewform?'}>
                Bug Report
              </Button>
        </HStack>
      </Stack>
      <Divider mt={12} mb={12} />

      {/* Chart Area */}
      <Heading>
          Graph
        </Heading>
      <Skeleton>
        <Box w={"500px"} h={"500px"}>

        </Box>
      </Skeleton>
      <Divider mt={12} mb={12} />

      {/* Trading Area */}

      {/* Settings Area */}

      <Stack pb="50px">
        {/* <Heading fontSize="3xl" fontWeight="700">
            Warning
        </Heading>
        <chakra.p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vero doloribus ipsam non exercitationem consequatur placeat, possimus distinctio ad illum ut! Eaque magnam consequatur odio pariatur placeat dolor, fugiat beatae!
        </chakra.p> */}

        <Heading>
            Bank Blanace
        </Heading>
        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          color={'purple.400'}
          >
          $100,000
        </Heading>

      <Heading>
        Buying {BuysliderValue} Shares
      </Heading>

      <Slider onChange={(val) => setBuySliderValue(val)} defaultValue={1} min={1} max={100}>
        <SliderTrack>
          <SliderFilledTrack bg='purple.300' />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="purple.400"/>
      </Slider>


      <Heading>
        Selling {SellsliderValue} Shares
      </Heading>

      <Slider  onChange={(val) => setSellSliderValue(val)}defaultValue={1} min={1} max={100}>
        <SliderTrack >
          <SliderFilledTrack bg='purple.300' />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="purple.400"/>
      </Slider>
      </Stack>

      
      {/* Characters Area */}
      <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)', // 1 column for small screens
        sm: 'repeat(2, 1fr)', // 2 columns for small screens and up
        md: 'repeat(3, 1fr)', // 3 columns for medium screens and up
        lg: 'repeat(4, 1fr)', // 4 columns for large screens and up
        xl: 'repeat(5, 1fr)'  // 6 columns for extra large screens
      }}
      gap={10}
    >
      {characters.map((character, index) => (
        <GridItem key={index}>
          <Box
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${character.src})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={character.src}
                alt={character.name}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {character.name}
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  Value {character.price}
                </Text>
                <Text>
                  Owned {character.owned}
                </Text>
              </Stack>
              <Stack direction={"row"}>
              <Button bg={"purple.300"}>
                Buy
              </Button>
              <Button>
                Sell
              </Button>
              </Stack>

            </Stack>
          </Box>
        </GridItem>
      ))}
    </Grid>
    </Container>  
    )
}
