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
} from '@chakra-ui/react'

export default function Leaderboard() {
  return (
    <Container maxW="7xl" mt={14} p={4}>
      <Stack>
        <chakra.h2 fontSize="3xl" fontWeight="700">
          Leaderboard
        </chakra.h2>
        <chakra.p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel, nostrum repellat dignissimos beatae deleniti cumque vero veritatis ipsa veniam optio dolorum ratione, sequi eligendi voluptatum, adipisci iure mollitia voluptatibus?
        </chakra.p>
      </Stack>
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