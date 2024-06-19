import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text
} from '@chakra-ui/react'


export default function Login() {
  return (
    
    <Flex
      flex={"1"}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Log In
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'purple.400'}
            color={'white'}
            _hover={{
              bg: 'purple.500',
            }}>
            Log In
          </Button>
        </Stack>
        <Button
                    as={'a'}
            href="/signup"
>
          Sign Up
        </Button>
      </Stack>
    </Flex>
  )
}
