import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {

    const timestamps = ["7:15 PM", "12:55 AM", "6:35AM", "12:15 PM", "5:55 PM"];

  return (
    <CustomCard>
        <Flex justifyContent="space-between" align="start">
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">
                        Wallet Balance
                    </Text>
                </HStack>
                <HStack 
                    spacing="4"
                    align={{
                        base: "flex-start",
                        sm: "center"
                    }}
                    flexDir={{
                        base : "column",
                        sm: "row",
                    }}
                >
                    <HStack>
                        <Text textStyle="h2" fontWeight="medium" >
                            22.39401000
                        </Text>
                        <HStack fontWeight="medium" color="green.500">
                            <Icon as={BsArrowUpRight} />
                            <Text fontSize="sm" fontWeight="medium" >
                                22%
                            </Text>
                        </HStack>
                    </HStack>
                </HStack>
            </Stack>
            <HStack>
                <Button backgroundColor="purple.500" px="2" py="2" color="white" fontWeight="medium" borderRadius="10px" _hover={{ backgroundColor: "#733df2" }}>
                    <Icon as={AiFillPlusCircle} mr="1" />
                    Buy
                </Button>
                <Button backgroundColor="purple.500" color="white" px="2" py="2" fontWeight="medium" borderRadius="10px" _hover={{ backgroundColor: "#733df2" }}>
                    <Icon as={AiFillMinusCircle} mr="1"/>
                    Sell
                </Button>
            </HStack>
        </Flex>
        <Tabs variant='soft-rounded'>
            <Flex justify="end">
                <TabList bg="black.5" p="1" borderRadius="10px" >
                    {
                        ["1H","1D","1W","1M"].map((tab)=> (
                            <Tab  
                                _selected={{
                                bg: 'white',
                                color: 'black',
                                px:"6px",
                                py: "6px",
                                mx: "2px",
                                borderRadius: "8px",
                                justifyContent: "center",
                                fontWeight: "medium",
                                fontSize: "sm"
                                }}
                                sx={{
                                    px: "6px",  // Ensure the padding is the same in both selected and unselected states
                                    py: "6px",
                                    borderRadius: "8px",
                                    fontWeight: "medium",
                                    fontSize: "sm",
                                    mx: "2px",
                                }}
                            >
                                {tab}
                            </Tab>
                        ))
                    }
                </TabList>
            </Flex>
            <TabPanels>
                <TabPanel>
                    <Image w="100%" src='Graph.png' mt="10px" />
                    <HStack justify="space-between" mt="10px" mb="-10px">
                        {
                            timestamps.map((timestamp) => (
                                <Text key={timestamp} fontSize="sm" color="black.80">
                                    {timestamp}
                                </Text>
                            ))
                        }
                    </HStack>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </CustomCard>
  )
}

export default PriceSection
