import { Card, Stack } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack 
        spacing="-1px" 
        alignItems={{
          base: "center",
          md: "center"
        }} 
      >
        <SupportCard
          leftComponent={<ContactCard/>}
          title="Contact Us"
          text = "Have a question or just want to know more? Feel free to reach out to us."
          icon={IoMdMail}
        />
        <SupportCard 
          leftComponent={<InfoCard
          inverted={true}
          imgURL="/grid_bg.png" 
          text= "Learn more about our real estate, mortgage, and  corporate account services"
          Tagtext = "Contact"
        />}
          title="Live Chat"
          text = "Don’t have time to wait for the answer? Chat with us now."
          icon={BiSolidMessageRounded}
        />
      </Stack>
    </DashboardLayout>
  )
}

export default Support

