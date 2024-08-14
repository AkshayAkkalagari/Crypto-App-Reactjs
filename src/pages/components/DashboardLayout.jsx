import { Box, color, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title, children}) => {

    const { isOpen, onClose, onOpen} = useDisclosure();
    const blurStyle = isOpen ? { filter: 'blur(1.5px)', transition: 'filter 0.3s ease' } : {};

  return (
    <Box>
      <Flex>
        <Box
            display={{
                base: "none",
                lg: "flex"
            }}
        >
            <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1} style={blurStyle}>
            <TopNav title={title} onOpen={onOpen} />
            <Container 
              overflowX="hidden" 
              overflowY="auto" 
              height="calc(100vh - 89px)" 
              maxWidth="1020px" 
              m="0 auto" 
              mt="24px"
            >
              {children}
            </Container>
        </Box>
      </Flex>
    </Box>
  )
}

export default DashboardLayout
