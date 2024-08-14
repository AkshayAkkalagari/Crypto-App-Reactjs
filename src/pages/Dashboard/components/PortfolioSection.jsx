import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LuArrowUpToLine } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";

const PortfolioSection = () => {
  return (
    <HStack 
        bg="white" 
        borderRadius="xl" 
        p="6" 
        justify="space-between"
        align={{
            base: "flex-start",
            xl: "center"
        }}
        flexDir={{
            base : "column",
            xl: "row",
        }}

        spacing={{
            base: "4",
            xl: "0"
        }}
    >
        <HStack 
            spacing={{
                base: "2",
                xl: "16"
            }}
            align={{
                base: "flex-start",
                xl: "center"
            }}
            flexDir={{
                base : "column",
                xl: "row",
            }}
        >
            <Stack>
                <HStack color="black.80">
                    <Text fontSize="sm">
                        Total Portfolio Value
                    </Text>
                    <Icon as={AiOutlineInfoCircle} />
                </HStack>
                <Text textStyle="h2" fontWeight="medium" >
                    ₹ 112,312.24
                </Text>
            </Stack>
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
                        <Tag backgroundColor="#ecebeb" color="#575757" px="1" fontWeight="medium" borderRadius="5px" >
                            BTC
                        </Tag>
                    </HStack>
                    <HStack>
                        <Text textStyle="h2" fontWeight="medium" >
                            ₹ 1,300.00
                        </Text> 
                        <Tag backgroundColor="#ecebeb" color="#575757" px="1" fontWeight="medium" borderRadius="5px" >
                            INR
                        </Tag>
                    </HStack>
                </HStack>
            </Stack>
        </HStack>


      <HStack>
        <Button backgroundColor="purple.500" px="2" py="2" color="white" fontWeight="medium" borderRadius="10px" _hover={{ backgroundColor: "#733df2" }}>
            <Icon as={LuArrowDownToLine} mr="1" />
            Deposit
        </Button>
        <Button backgroundColor="purple.500" color="white" px="2" py="2" fontWeight="medium" borderRadius="10px" _hover={{ backgroundColor: "#733df2" }}>
            <Icon as={LuArrowUpToLine} mr="1"/>
            Withdraw
        </Button>
      </HStack>
    </HStack>
  )
}

export default PortfolioSection
