import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({ imgURL, text, Tagtext, inverted }) => {
  return (
    <CustomCard 
        bgImage={imgURL}  
        bgSize="cover" 
        bgRepeat="no-repeat" 
        pt="15px"
        bgColor= {inverted ? "p.purple" : "white"} 
    >
        <Tag 
            bg= {inverted ? "white" : "p.purple"}
            color= {inverted ? "p.purple" : "white"} 
            px="2" py="0.3" 
            borderRadius="full"
        >
            {Tagtext}
        </Tag>
        <Text 
            textStyle="h5" 
            mt="4" 
            fontWeight="medium" 
            color= {inverted ? "white" : "black"} 
        >
            {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard
