import React from 'react'
import { Stack,ButtonGroup,Button,Box, } from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons"

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
    px={12}
    bgImage="url('https://wallpaperaccess.com/full/5932245.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mt={1}
  >
    <ButtonGroup gap='5'>
      <Button colorScheme='whiteAlpha' borderRadius="50px" color="white" backgroundColor="white.500" variant="outline">2023 LookBook</Button>
      <Button colorScheme='blackAlpha' borderRadius="50px" color="violet" backgroundColor="white" rightIcon={<ArrowForwardIcon />}>Shop Now</Button>
    </ButtonGroup>
  </Box>
</Stack>
  </>
}

export default Home