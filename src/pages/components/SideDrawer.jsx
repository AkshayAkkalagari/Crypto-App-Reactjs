import React from 'react'
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton} from '@chakra-ui/react'
import Sidenav from './Sidenav'

const SideDrawer = ({onClose, isOpen}) => {
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left' 
          onClose={onClose}
        >
          <DrawerOverlay/>
          <DrawerContent bg="white" maxWidth="255px" height="full">
            <DrawerCloseButton ml="85%" mt="10px" />

            <DrawerBody>
                <Sidenav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
  )
}

export default SideDrawer
