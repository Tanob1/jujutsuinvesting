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
  Button
} from '@chakra-ui/react'

export default function Stocks() {
  const [BuysliderValue, setBuySliderValue] = useState(1)
  const [SellsliderValue, setSellSliderValue] = useState(1)
  const images = [
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },
    { src:   'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg', title: 'Image 1' },

    // Add more images as needed
  ];
  return (
<Container maxW="7xl" mt={14} p={4}>
      <Stack>
        <chakra.h2 fontSize="3xl" fontWeight="700">
          Stocks
        </chakra.h2>
        <chakra.p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat obcaecati hic totam ex voluptatum sequi, dolorum, veritatis, blanditiis tenetur ratione doloremque consectetur voluptatem. Sint iste impedit recusandae ducimus minus sunt.
        </chakra.p>
      </Stack>
      <Divider mt={12} mb={12} />

      {/* Chart Area */}
      <chakra.h2 fontSize="3xl" fontWeight="700">
          Graph
        </chakra.h2>
      <Skeleton>
        <Box w={"500px"} h={"500px"}>

        </Box>
      </Skeleton>
      <Divider mt={12} mb={12} />

      {/* Trading Area */}

      {/* Settings Area */}

      <Stack pb="50px">
        {/* <chakra.h2 fontSize="3xl" fontWeight="700">
            Warning
        </chakra.h2>
        <chakra.p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vero doloribus ipsam non exercitationem consequatur placeat, possimus distinctio ad illum ut! Eaque magnam consequatur odio pariatur placeat dolor, fugiat beatae!
        </chakra.p> */}

        <chakra.h2 fontSize="6xl" fontWeight="700">
            2530$
        </chakra.h2>
        <Text >
          Current Balance      
        </Text>

      <chakra.h2 fontSize="2xl" fontWeight="700">
        Buying {BuysliderValue} Shares
      </chakra.h2>

      <Slider onChange={(val) => setBuySliderValue(val)} defaultValue={1} min={1} max={100}>
        <SliderTrack>
          <SliderFilledTrack bg='purple.300' />
        </SliderTrack>
        <SliderThumb boxSize={4} bg="purple.400"/>
      </Slider>


      <chakra.h2 fontSize="2xl" fontWeight="700">
        Selling {SellsliderValue} Shares
      </chakra.h2>

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
      {images.map((image, index) => (
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
                backgroundImage: `url(${image.src})`,
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
                src={image.src}
                alt={image.title}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {image.title}
              </Heading>
              <Stack direction={'column'} align={'center'}>
                <Text fontWeight={800} fontSize={'xl'}>
                  Value $57
                </Text>
                <Text>
                  Owned ###
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
    </Container>  )
}
