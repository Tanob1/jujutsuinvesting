'use client'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export default function ErrorPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Something Went Wrong!
      </Heading>
      <Text color={'gray.500'}>
        Looks like you've wandered into the domain expansion of a broken link! Try retracing your steps, or Gojo Satoru might have to use his Six Eyes to find the pages for you.
      </Text>
    </Box>
  )
}