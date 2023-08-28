import React, { useEffect,useState } from 'react'
import axios from "axios"
import ErrorMessage from "../Components/ErrorMessage"
import LoadingSkeleton from '../Components/LoadingSkeleton';
import { SimpleGrid,Text,Button,ButtonGroup,VStack,Image,Box,Badge,Stack, Heading, Select, HStack, Spacer, Center } from '@chakra-ui/react';
const getUrl=(url,sortOrder,Filterby,type,page,limit)=>{
  if(page){
    let query=`?_page=${page}&_limit=${limit}`
    url+=query
  }
	if(sortOrder){
    let query =page ? `&_sort=price&_order=${sortOrder}` :`?_sort=price&_order=${sortOrder}`
		url+=query
	}
	if(Filterby){
		let query=page ? `&category=${Filterby}`: sortOrder? `&category=${Filterby}`:`?category=${Filterby}`
		url+=query
	}
  if(type){
    let query=page ? `&type=${type}`: sortOrder ? `&type=${type}` : Filterby ? `&type=${type}`: `?type=${type}`
    url+=query
  }
  
	return url
}
const Product = () => {
  const [Data,setData]=useState([]);
  const [loading,setloading]=useState(false);
  const [err,seterr]=useState(false);
  const [Filterby,setFilter]=useState("")
	const [sortOrder,setOrder]=useState("")
  const [type,setType]=useState("")
  const [page,setPage]=useState(1)
  const limit=6
  const fetchdata=(url)=>{
    setloading(true)
axios({
  url:url,
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
		let url=getUrl(`http://localhost:8080/hard`,sortOrder,Filterby,type,page,limit)
fetchdata(url)
	},[sortOrder,Filterby,type,page,limit])

function handleChange(e){
setFilter(e.target.value)
}

  if(err){
    return <ErrorMessage/>
  }
  if(loading){
    return <LoadingSkeleton/>
  }
  return <>
  
  <Stack spacing={5} my={4} justifyContent="space-around" gap={5}>
				<div className="sortingButtons">
        <Heading as='h3' size='lg'>Sort By Price</Heading>
					<Button className="sortByRentAsc" onClick={()=>setOrder("asc")}>Sort by Asc</Button>
          
					<Button colorScheme={"red"} className="sortByRentDesc" onClick={()=>setOrder("desc")}>
						Sort by Desc
					</Button>
				</div>
        </Stack>
        <HStack width="40%">
          <label>Filter by Category</label>
    <Select variant="outline" value={type} placeholder='Select' onChange={(e)=>setType(e.target.value)}>
  <option value='cap'>Cap</option>
  <option value='shocks'>Shocks</option>
  <option value='t-shirt'>T-Shirt</option>
  <option value='pants'>Pants</option>
  <option value='shirt'>Shirts</option>
</Select>
<Spacer/>
<label>Filter by Gender</label>
    <Select variant="outline" value={Filterby} placeholder='Select' onChange={handleChange}>
  <option value='Mens'>Mens</option>
  <option value='Womens'>Womens</option>
  
</Select>

        </HStack>

		
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
      <Text>Category : {item.category}</Text>
      <Text>Price : {item.price}</Text>
      <Badge><Text>Rating : {item.rating}</Text></Badge>
      <Text>Size: {item.size}</Text>
      <ButtonGroup gap="4">
        <Button colorScheme="blue" variant="outline" >Add To Cart</Button>
        <Button colorScheme="violet" variant="outline" >Details</Button>
        </ButtonGroup>

    </VStack>
    </Box>
    ))}
  </SimpleGrid>
  <Center my={5}>
<HStack>
  <Button disabled={page===1} onClick={()=>setPage(prev=> prev-1)}>Prev</Button>
  <Button disabled>{page}</Button>
  <Button onClick={()=>setPage(prev=> prev+1)}>Next</Button>
</HStack>
</Center>

  </>
}

export default Product