import { Box, Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

const TopNav = ({title, onOpen}) => {
  return (
    <Box px="4" bg="white">
        <HStack maxW="1020px" mx="auto" h="16" justify="space-between">
            <Icon as={FaBars} onClick={onOpen} display={{ base: "block", lg: "none"}} />
            <Heading as="h1" fontWeight="medium" fontSize="28px">{title}</Heading>

            <Menu>
                <MenuButton as={Button}>
                    <Icon as={FaCircleUser} fontSize="26px" />
                </MenuButton>
                <MenuList boxShadow="lg" zIndex="99" border="1px solid #d4d4d4" bg="white" p="2" borderRadius="10px">
                    <MenuItem _hover={{
                                bg: "#F3F3F7",
                                color:"#030303"
                                }} px="3" py="1">Logout</MenuItem>
                    <MenuItem _hover={{
                                bg: "#F3F3F7",
                                color:"#030303"
                                }} px="3" py="1">Support</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    </Box>
  )
}

export default TopNav
