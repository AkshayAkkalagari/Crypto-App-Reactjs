import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoMdMail } from "react-icons/io";
import ContactCard from './ContactCard';

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex 
      gap="20" 
      flexDir={{
        base: "column",
        xl: "row"
      }}
      p={{
        base: "10px"
      }}
    >
      <Stack maxW="400px">
        <Icon as={icon} boxSize="5" color="p.purple" />
        <Text as="h2" fontWeight="medium" textStyle="h2">
            {title}
        </Text>
        <Text fontSize="sm" color="black.60">
            {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  )
}

export default SupportCard
