import React from 'react';
import { Box, Flex, Input, Button, Stack, Text, Spacer,Link } from '@chakra-ui/react';
import {EmailIcon, PhoneIcon} from "@chakra-ui/icons"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <Box bg="gray.700" color="white" p="6">
      <Flex direction="column" align="center" justify="center">
        <Stack direction={{ base: 'column', md: 'row' }} spacing="5">
          <Box>
            <Text fontWeight="bold">Navigation</Text>
            <Text>Shop</Text>
            <Text>Lookbook</Text>
            <Text>About</Text>
          </Box>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Box>
            <Text fontWeight="bold">Customer Care</Text>
            <Text>Shipping info & returns</Text>
            <Text>Terms & conditions</Text>
            <Text>Privacy Policy</Text>
          </Box>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Box>
            <Text fontWeight="bold">Contact</Text>
            <Text><EmailIcon/> Versencia@info.com</Text>
            <Text><PhoneIcon/> +91 9876543210</Text>
          </Box>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Spacer/>
          <Box spacing={2}>
            <Text fontWeight="bold">Social Media</Text>
            <Link ><FaInstagram/>Instagram</Link>
            <Link ><FaFacebook/>Facebook</Link>
            <Link><FaTwitter/>Twitter</Link>
          </Box>
        </Stack>
        <Box mt="4">
          <Text fontWeight="bold">Subscribe to our newsletter</Text>
          <Flex mt="2">
            <Input
              placeholder="Enter your email"
              bg="white"
              size="md"
              mr="2"
            />
            <Button colorScheme="teal" size="xs" p={5}>
              Get Subscribe
            </Button>
            
          </Flex>
          <Box>
            
          <Text fontSize="3xl"> ©  Versencia</Text>
          <Spacer/>
          <Text fontSize="xm">Made with ❤️ by Shivendra </Text>
          
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
