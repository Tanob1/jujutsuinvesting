import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
  Container,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

import React from "react";

const IMAGE =
  'https://ih1.redbubble.net/image.5394298500.7778/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'


export default function Home_Hero() {
  return (
    <div>
      {/* Hero */}
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'purple.400',
                  zIndex: -1,
                }}>
                Welcome to
              </Text>
              <br />
              <Text as={'span'} color={'purple.400'}>
                Jujutsu Investing!            </Text>
            </Heading>
            <Text color={'gray.500'}>
              Do you want to put your stocks in Gojo? Kashimo? Yuta? Whoever you want to invest in we have you covered.
              Get started and start investing now!
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
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
                href={'/stocks'}>
                Trade Stocks
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                as={'a'}
                href={'#moreinfo'}>
                Details
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
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
              {/* <Skeleton> */}
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
                  backgroundImage: `url(${IMAGE})`,
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
                  src={IMAGE}
                  alt="#"
                />
              </Box>
            {/* </Skeleton> */}
              <Stack pt={10}>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                  Top Stock of the Today
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  NAME OF THE STOCK
                </Heading>
                <Stack direction={'row'}>
                <Stat>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                      <StatArrow type='increase' />
                      23.36%
                    </StatHelpText>
                  </Stat>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Stack>
      </Container>


      {/* Some more info */}
      <Container maxW={'7xl'}>
      <Stack
          align={{base:"center",md:"normal"}}
          spacing={{ base: 8, md: 40 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
        {/* First part */}
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What is Jujutsu Investing?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sapiente nemo nihil aliquam eaque similique labore magni, iusto error! Necessitatibus veritatis assumenda sequi similique quos vitae iste, animi eveniet magnam.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">Do we us real world currency?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque accusamus, at tenetur nostrum nam officiis, debitis similique inventore quia culpa excepturi saepe minus eum suscipit veritatis optio in nesciunt?
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">When does trading stop?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deleniti similique tempora sint! Voluptatibus culpa voluptas eos. Debitis sapiente temporibus delectus aliquam, consectetur, officia eaque doloribus officiis laborum ducimus eligendi.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
        {/* Second Part */}
        <div id="moreinfo">        
          <Heading>
            What is This Project?
          </Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla architecto consequuntur eveniet optio suscipit inventore quo dignissimos, quisquam aut cupiditate ad labore, culpa recusandae animi magnam vitae, accusamus ipsam dolores!
          </Text>
        </div>
        </Stack>
      </Container>
    </div>
  )
}