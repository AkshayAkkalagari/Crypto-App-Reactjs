import React from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Stack, Text, Tag } from '@chakra-ui/react'

const TransactionTable = () => {

    const tableData = [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount: "+₹81,123",
          status: "pending",
        },
        {
          id: "HD82NA4H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "INR Widthdraw",
            tag: "Wire Transfer",
          },
          amount: "-₹55,123",
          status: "processing",
        },
        {
          id: "HD82NA5H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Buy",
            tag: "BTC",
          },
          amount: "12.0554484 BTC",
          status: "cancelled",
        },
        {
          id: "HD82NA6H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Sell",
            tag: "BTC",
          },
          amount: "-2.0554484 BTC",
          status: "completed",
        },
        {
          id: "HD82NA7H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "BTC Deposit",
          },
          amount: "+15.5000000",
          status: "pending",
        },
        {
          id: "HD82NA8H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "BTC Widthdraw",
          },
          amount: "-5.05555544",
          status: "completed",
        },
    ];

    const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
    };

  return (
    <TableContainer
      borderRadius="8px"
      p={4}
      w="100%"
    >
      <Table variant="striped" size="md" w="100%">
        <Thead>
          <Tr borderBottom="1px solid" borderColor="gray.200" textColor="#4b4b4b">
            <Th fontSize="sm" pb="2" fontWeight="medium" textAlign="center">ID</Th>
            <Th fontSize="sm" pb="2" fontWeight="medium" textAlign="center">Date & Time</Th>
            <Th isNumeric fontSize="sm" pb="2" fontWeight="medium">Type</Th>
            <Th isNumeric fontSize="sm" pb="2" fontWeight="medium">Amount</Th>
            <Th isNumeric fontSize="sm" pb="2" fontWeight="medium">Status</Th>
          </Tr>
        </Thead>
        <Tbody color="p.black">
          {
            tableData.map((data,i)=> (
                <Tr key={data.id} borderBottom="1px solid" borderColor="gray.200">
                    <Td fontSize="sm" fontWeight="medium" textAlign="center">{data.id}</Td>
                    <Td>
                        <Stack gap="0">
                            <Text textAlign="center" fontSize="sm" fontWeight="medium">{data.date}</Text>
                            <Text textAlign="center" fontSize="xs" color="black.60">{data.time}</Text>
                        </Stack>
                    </Td>
                    <Td>
                        <Stack gap="0">
                            <Text textAlign="center" fontSize="sm" fontWeight="medium">{data.type.name}</Text>
                            <Text textAlign="center" fontSize="xs" color="black.60">{data.type?.tag}</Text>
                        </Stack>
                    </Td>
                    <Td textAlign="center" fontSize="sm" fontWeight="medium">{data.amount}</Td>
                    <Td textAlign="center" fontSize="sm" fontWeight="medium">
                        <Tag bg={statusColor[data.status]} color="white" borderRadius="full" px="2" py="1">
                            {data.status}
                        </Tag>
                    </Td>
                </Tr>
            ))
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TransactionTable


{/* <Tr>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">inches</Td>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">millimetres (mm)</Td>
            <Td isNumeric fontSize="sm" p={2} pl="0" textAlign="center" borderBottom="1px solid #e2e8f0">25.4</Td>
          </Tr>
          <Tr>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">feet</Td>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">centimetres (cm)</Td>
            <Td isNumeric fontSize="sm" p={2} pl="0" textAlign="center" borderBottom="1px solid #e2e8f0">30.48</Td>
          </Tr>
          <Tr>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">yards</Td>
            <Td fontSize="sm" p={2} pl="0" borderBottom="1px solid #e2e8f0">metres (m)</Td>
            <Td isNumeric fontSize="sm" p={2} pl="0" textAlign="center" borderBottom="1px solid #e2e8f0">0.91444</Td>
          </Tr> */}


        {/* <Tfoot>
          <Tr>
            <Th fontSize="sm" fontWeight="medium" textAlign="left">TO CONVERT</Th>
            <Th fontSize="sm" fontWeight="medium" textAlign="left">INTO</Th>
            <Th isNumeric fontSize="sm" fontWeight="medium">MULTIPLY BY</Th>
          </Tr>
        </Tfoot> */}