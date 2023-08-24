import React from 'react'
import {Flex,Heading,Spacer,HStack,Link} from "@chakra-ui/react"
import {Link as RLink} from "react-router-dom"
const Navbar = () => {
  return (
    <Flex
      data-cy="navbar"
      align="center"
      backgroundColor="gray.900"
      color="gray.50"
      p={4}
    >
     <Heading as="h3" size="lg">
     <Link as={RLink} to="/">Versencia</Link>
      </Heading>
      <Spacer />
      <HStack spacing="24px">{/* Add chakra-ui link here */}
<Link as={RLink} to="/about">About</Link>
<Link as={RLink} to="/login">Login</Link>
<Link as={RLink} to="/shop">Shop</Link>
<Link as={RLink} to="/cart">Cart</Link>
      </HStack>
    </Flex>
  )
}

export default Navbar