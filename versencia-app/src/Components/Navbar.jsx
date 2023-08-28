import React from 'react'
import {Flex,Heading,Spacer,HStack,Link} from "@chakra-ui/react"
import {Link as RLink} from "react-router-dom"
const Navbar = () => {
  return (
    <Flex
      align="center"
      backgroundColor="gray.700"
      color="white"
      p={4}
      position="sticky"
    >
     <Heading as="h3" size="lg">
     <Link as={RLink} to="/" fontFamily="cursive">Versencia</Link>
      </Heading>
      <Spacer />
      <HStack spacing="150px" fontFamily="sans-serif" >{/* Add chakra-ui link here */}
<Link as={RLink} to="/about" on>About</Link>

<Link as={RLink} to="/shop">Shop</Link>
<Link as={RLink} to="/cart">Cart</Link>
<Link as={RLink} to="/login">Login</Link>
      </HStack>
    </Flex>
  )
}

export default Navbar