import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { FiDownload } from "react-icons/fi";
import TransactionTable from './components/TransactionTable';
import { BsSearch } from "react-icons/bs";

const TransactionPage = () => {

  const tabs = [
    {
      name: "All",
      count: "349",
    },
    {
      name: "Deposit",
      count: "349",
    },
    {
      name: "Withdraw",
      count: "349",
    },
    {
      name: "Trade",
      count: "349",
    },
  ]

  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="2" mb="3">
        <Button 
          leftIcon={<Icon as={FiDownload} />} 
          bg="purple.500"
          borderRadius="10px"
          p="2"
          color="white"
          fontWeight="medium"
        >
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs position='relative' variant='unstyled'>
          <TabList bg="white" gap="6" borderTopRadius="10px" p="7px" display="flex" w="full" justifyContent="space-between">
            <HStack>
              {
                tabs.map((tab)=> (
                  <Tab p="2px" key={tab.name} display="flex" ml="2" gap="2" _selected={{ color: "purple.500" }}>
                    {tab.name} 
                    <Tag bg="#d5d5de" ml="3px" px="3px" borderRadius="10px" color="#black">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))
              }
            </HStack>

            <InputGroup
              border="1px solid" 
              borderColor="gray.300"
              borderRadius="md"
              boxShadow="sm"
              _hover={{ borderColor: 'gray.400' }}
              _focusWithin={{ boxShadow: 'outline' }}
              maxW="250px"
              p="0"
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} color="gray.500" ml="2" mt="1" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search..."
                pl="10"
                fontSize="sm"
                border="none" 
                _placeholder={{ color: 'gray.500' }} 
                _focus={{ border: 'none', outline: 'none' }}
              />
            </InputGroup>
          </TabList>
          <TabIndicator mt='-1.5px' height='3px' bg='purple.500' borderRadius='2px' />
          <TabPanels bg="white" mt="1" borderBottomRadius="10px" p="10px">
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
