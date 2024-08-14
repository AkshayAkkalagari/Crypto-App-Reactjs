import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Box, Button, Divider, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react'
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa6";

const Transactions = () => {

    const transactions = [
        {
            id: "1",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },
        {
            id: "2",
            icon: FaBtc,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2022-05-27 12:32 PM"
        },
        {
            id: "3",
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },
    ]

  return (
    <CustomCard h="full">
        <Text mb="4" fontSize="sm" color="black.80">
            Recent Transactions
        </Text>
        <Stack spacing="3">
            {transactions.map((transaction,i)=> (
                <Fragment key={transaction.id}>
                    {i !== 0 && <hr/>}
                    <Flex gap="4">
                        <Grid placeItems="center" bg="black.5" boxSize="40px" borderRadius="full">
                            <Icon as={transaction.icon} />
                        </Grid>
                        <Flex justify="space-between" w="full">
                            <Stack spacing="0">
                                <Text textStyle="h6">
                                    {transaction.text}
                                </Text>
                                <Text fontSize="sm" color="black.80">
                                    {transaction.timestamp}
                                </Text>
                            </Stack>
                            <Text textStyle="h6">
                                {transaction.amount}
                            </Text>
                        </Flex>
                    </Flex>
                </Fragment>
            ))}
        </Stack>
        <Button 
            w="full" 
            h="40px" 
            mt="3"
            mb="-3"
            borderRadius="10px" 
            fontWeight="medium" 
            bg="#f1f1f1"
            _hover={{
                bg:"#e6e4e4"
            }}
        >
            View All
        </Button>
    </CustomCard>
  )
}

export default Transactions
