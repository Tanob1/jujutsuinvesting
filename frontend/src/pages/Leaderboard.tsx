import React from "react";
import {
  Stack,
  Divider,
  chakra,
  Container,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Flex,
  Spacer,
  Text
} from '@chakra-ui/react'

export default function Leaderboard() {
  return (
    <Container maxW="7xl" mt={14} p={4}>
      <Stack>
        <Heading>
          Leaderboard
        </Heading>
        <Text>
          Must be logged in to appear on leaderboard      
        </Text>
      </Stack>
      <Divider mt={12} mb={12} />

      <Flex direction={{
        base: 'column', 
        sm: 'row', 
      }} 
      gap={{
        base: '1rem', 
      }}>
        <Stack>
        <Heading> Ranking </Heading>
          <Text fontSize='3xl'>19203</Text>
        </Stack>
        <Spacer />
        <Stack>
        <Heading> Total </Heading>
        <Text fontSize='3xl'>222222</Text>
        </Stack>
        <Spacer />
        <Stack>
        <Heading> Bank </Heading>
        <Text fontSize='3xl'>111111</Text>
        </Stack>
        <Spacer />
        <Stack>
        <Heading> Stocks </Heading>
        <Text fontSize='3xl'>111111</Text>
        </Stack>
      </Flex>

      <Divider mt={12} mb={12} />

      <Tabs>
        <TabList>
          <Tab>Bank+Stocks</Tab>
          <Tab>Bank Only</Tab>
          <Tab>Stock Only</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Position</Th>
                    <Th>Name</Th>
                    <Th isNumeric>Total</Th>
                    <Th isNumeric>Bank</Th>
                    <Th isNumeric>Stocks</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Name</Td>
                    <Td isNumeric>200,000</Td>
                    <Td isNumeric>100,000</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Name</Td>
                    <Td isNumeric>200,000</Td>
                    <Td isNumeric>100,000</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>Name</Td>
                    <Td isNumeric>200,000</Td>
                    <Td isNumeric>100,000</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Your Position</Th>
                    <Th>Your Name</Th>
                    <Th isNumeric>Your Total</Th>
                    <Th isNumeric>Your Bank</Th>
                    <Th isNumeric>Your Stocks</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Position</Th>
                    <Th>Name</Th>
                    <Th isNumeric>Bank</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Your Position</Th>
                    <Th>Your Name</Th>
                    <Th isNumeric>Your Bank</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Position</Th>
                    <Th>Name</Th>
                    <Th isNumeric>Stocks</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>Name</Td>
                    <Td isNumeric>100,000</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Your Position</Th>
                    <Th>Your Name</Th>
                    <Th isNumeric>Your Stocks</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}