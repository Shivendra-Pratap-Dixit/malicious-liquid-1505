import React, { useEffect,useState } from 'react'
import axios from "axios"
import ErrorMessage from "../Components/ErrorMessage"
import LoadingSkeleton from '../Components/LoadingSkeleton';
import { SimpleGrid,Text,Button,ButtonGroup,VStack,Image,Box, Heading, Divider } from '@chakra-ui/react';
const Product = () => {
  const [Data,setData]=useState([]);
  const [loading,setloading]=useState(false);
  const [err,seterr]=useState(false);
  const fetchdata=()=>{
    setloading(true)
axios({
  url:`http://localhost:8080/hard?_limit=6`,
method:"get"
})
.then((res)=>{
  //console.log(res.data)
  setData(res)

  setloading(false)
}).catch(()=>{
  seterr(true)
})
  }
  useEffect(()=>{
    fetchdata()
  },[])

  if(err){
    return <ErrorMessage/>
  }
  if(loading){
    return <LoadingSkeleton/>
  }
  return <>
<Heading> New Releases</Heading>
<Divider my={8}/>
  <SimpleGrid
  columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        m={6}>
          {Data?.data?.map((item)=>(
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <VStack
      spacing="1px"
      align="center"
      p={3}
    >
      <Image src={item.image} 
    objectFit='cover' variant="outline" borderRadius='10'
    boxSize='250px' />
      <Text>Product : {item.title}</Text>
      <Text>Type : {item.type}</Text>
      <Text>Category : {item.category}</Text>
      <Text>Price : ₹{item.price}</Text>
      <Text>Rating : {item.rating}</Text>
      <ButtonGroup gap="4">
        <Button colorScheme="blue" variant="outline" >Add To Cart</Button>
        <Button colorScheme="violet" variant="outline" >Details</Button>
        </ButtonGroup>

    </VStack>
    </Box>
    ))}
  </SimpleGrid>

  </>
}

export default Product