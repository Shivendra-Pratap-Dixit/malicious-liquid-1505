import React from 'react'
import { Stack,ButtonGroup,Button,Box,Text,Spacer,Link } from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons"
import Product from "./Product"
import {Link as RLink} from "react-router-dom"
import Lookbook from './Lookbook'
const Home = () => {
  return <>
    <Stack direction='column'>
  <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    // width='100%'
    height="500px"
    borderRadius="10px"
    px={55}
    bgImage="url('https://wallpaperaccess.com/full/5932245.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mt={.5}
  >
    <Text color="white" fontSize="3xl">Simplycity is the ultimate <br/> sophistication !!!</Text>
    
    <Spacer/>
    <ButtonGroup gap='5'>
      <Button colorScheme='whiteAlpha' borderRadius="50px" color="white" backgroundColor="white.500" variant="outline">2023 LookBook</Button>
      <Button colorScheme='blackAlpha' borderRadius="50px" color="violet" backgroundColor="white" leftIcon={<ArrowForwardIcon />} ><Link as={RLink} to="/shop">Shop Now</Link></Button>
    </ButtonGroup>
  </Box>
</Stack>
<Lookbook/>
<Product/>
  </>
}

export default Home