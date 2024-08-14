import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card bg="white" p="4" borderRadius="16px">
        <Stack spacing="-1">
          <Text fontWeight="medium" fontSize="sm">
              You will receive response within 24 hours of time of submit.
          </Text>
          <HStack 
            gap="5"
            flexDir={{
              base: "column",
              md: "row"
            }}
            width="100%" // Ensure the HStack takes full width
            alignItems="flex-start"
          >
            <FormControl 
              flexGrow={.5} 
              flex={{ base: "1", md: "1" }} 
              width="100%"
            >
              <FormLabel p="1">
                Name
              </FormLabel>
              <Input 
                placeholder='Enter your name' 
                border="1px solid gray" 
                borderRadius="5px" 
                p="2" 
                width="100%"
              />
            </FormControl>
            <FormControl 
              mt={{base: "-4", md: "0"}}
              flexGrow={.5}
              flex={{ base: "1", md: "1" }} 
              width="100%"
            >
              <FormLabel p="1">
                Surname
              </FormLabel>
              <Input 
                placeholder='Enter your surname' 
                border="1px solid gray" 
                borderRadius="5px" 
                p="2" 
                width="100%"
              />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel p="1">
              Email
            </FormLabel>
            <Input 
              type="email"
              placeholder='Enter your email' 
              border="1px solid gray" 
              borderRadius="5px" 
              p="2" 
              w="full"
            />
            </FormControl>
            <FormControl>
              <FormLabel p="1">
                Message
              </FormLabel>
              <Textarea 
                type="email"
                placeholder='Enter your message' 
                border="1px solid gray" 
                borderRadius="5px" 
                p="2" 
                w="full"
              />
            </FormControl>
            <Checkbox
              defaultChecked
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                fontSize: "xs",
                "& .chakra-checkbox__control": {
                  width: "15px", 
                  height: "15px", 
                  borderColor: "gray", 
                  backgroundColor: "#d8d6d6", 
                  _hover: {
                    borderColor: "purple.500", 
                  },
                  _checked: {
                    backgroundColor: "purple.500",
                    borderColor: "purple.500", 
                    color: "white", 
                  },
                },
              }}
            >
              I agree with
              <Box as="span" color="purple.500" marginLeft="4px">
                Terms & Conditions.
              </Box>
          </Checkbox>
          <Stack spacing="2" mt="2">
            <Button
              bg="p.purple" 
              p="2"
              fontSize="sm" 
              color="white" 
              borderRadius="7px"
              _hover={{
                bg: "#602ab6"
              }}
            >
              Send Message
            </Button>
            <Button 
              bg="lightgray" 
              p="2" 
              borderRadius="7px"
              fontSize="sm"
              _hover={{
                bg: "#acabab"
              }}
            >
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
    </Card>
  )
}

export default ContactCard
