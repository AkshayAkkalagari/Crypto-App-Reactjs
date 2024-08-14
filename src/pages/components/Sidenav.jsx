import React from 'react'
import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {

    const location = useLocation();

    const isActiveLink = (link) => {
        return location.pathname === link;
    }

    const navLinks = [
        {
            icon: MdDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: GrTransaction,
            text: "Transactions",
            link: "/transactions",
        },
    ]

  return (
    // display:flex and flex-direction:column both css are default settings of Stack which will set components to left side
    // display:flex and align-items:center both css are default settings of HStack which will set components to center
    <Stack 
        justify="space-between" 
        boxShadow={{
            base: "none",
            lg: "lg"
        }}
        width={{
            base: "full",
            lg: "256px"
        }} 
        height="100vh"
        bg="white"
    >
        <Box>
            <Heading textAlign="center" fontSize="20px" as="h1" fontWeight="medium" pt="56px">
                Crypto World
            </Heading>
            <Box mt="6" mx="3"> 
                {
                    navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text} > 
                            <HStack 
                                borderRadius="10px"
                                py="3" 
                                px="4" 
                                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                                color={isActiveLink(nav.link) ? "#030303" : "#797E82"}
                                _hover={{
                                bg: "#F3F3F7",
                                color:"#030303"
                                }}
                            >
                                <Icon as={nav.icon}/>
                                <Text 
                                    fontSize="14px" 
                                    fontWeight="medium"
                                >
                                    {nav.text}
                                </Text>
                            </HStack>
                        </Link>
                    ))
                }
            </Box>
        </Box>

        <Box mt="6" mx="3" mb="6">
            <Link to="/support">
                <HStack 
                    borderRadius="10px"
                    py="3" 
                    px="4" 
                    bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
                    color={isActiveLink("/support") ? "#030303" : "#797E82"}
                    _hover={{
                        bg: "#F3F3F7",
                        color:"#030303"
                    }}
                >
                    <Icon as= {BiSupport}/>
                    <Text 
                        fontSize="14px" 
                        fontWeight="medium"
                    >
                        Support
                    </Text>
                </HStack>
            </Link>
        </Box>
    </Stack>  
  )
}

export default Sidenav
