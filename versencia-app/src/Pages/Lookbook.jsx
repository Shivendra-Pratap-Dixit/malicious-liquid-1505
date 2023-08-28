import { Heading,Image , Flex} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Lookbook = () => {
    const [Data,setData]=useState([])
    function fetchdata(){
        axios.get(`http://localhost:8080/Lookbook`)
        .then((res)=>{
            setData(res?.data)
        }).catch((err)=>{
console.log(err)
        })
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return <>
    <Heading>LookBook 2023</Heading>
    <Flex justify="space-around" wrap="wrap" spacing={10}>
    {Data?.map((item)=><div>
        <Image src={item.image} w="250px" h="300px" borderRadius="20px"/>
        
   </div>)} 
  
    </Flex>    
  </>
}

export default Lookbook