import React from 'react';
import { Container, Box, Heading, Text, VStack, Divider,Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Container maxW="xl" mt={10}>
      <Box textAlign="center">
        <Image src="https://wallpaperaccess.com/full/4670245.jpg" borderRadius="20px"/>
        <Heading as="h1" size="xl" mb={4}>
          About Versencia: Your Fashion Destination
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Welcome to Versencia – your ultimate fashion destination for all things trendy and stylish. Born in the heart of India, Versencia is a cutting-edge e-commerce platform that brings you a curated collection of the latest clothing trends, meticulously designed to elevate your fashion game. We pride ourselves on being a trailblazer in the world of online shopping, seamlessly combining the power of technology with the allure of fashion.
        </Text>
      </Box>

      <Divider my={8} />
<Box>
<Image src="https://images.unsplash.com/photo-1599476160130-3af44b69ec6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwaGVyaXRhZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" borderRadius="20px"/>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
          Our Indian Heritage, Global Appeal:
        </Heading>
        <Text fontSize="md">
          Rooted in the rich tapestry of Indian culture and craftsmanship, Versencia celebrates the diverse and vibrant essence of India while catering to a global audience.
        </Text>
      </VStack>
      </Box>
      <Divider my={8} />
      <Box>
      <Image src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?t=st=1692909057~exp=1692909657~hmac=1b189bf4d6704d3413db4cc5f991454ff4ed17e6bbf6b43a6b6e30ccb323e248" borderRadius="20px"/>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
        What Sets Us Apart:
        </Heading>
        <Text fontSize="md">
        Curation Excellence: Our dedicated team of fashion experts scours the industry for the latest trends, handpicking only the finest apparel to grace our virtual shelves. Each item is chosen with precision, guaranteeing that our customers stay ahead in the fashion game.
        </Text>
      </VStack>
      </Box>
      <Divider my={8} />
      <Box>
      <Image src="https://wallpaperaccess.com/full/5932254.jpg" borderRadius="20px"/>
      
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">
        Join the Versencia Community:
        </Heading>
        <Text fontSize="md">
        <Text fontSize={40} as="b">Versencia</Text> isn't just an app; it's a community of fashion enthusiasts, trendsetters, and individuals who appreciate the art of dressing well. Whether you're looking for a traditional ensemble that tells a story or a contemporary outfit that exudes confidence, Versencia has it all.

Join us on this exciting journey of self-expression through fashion.<br/> Download the Versencia app now and indulge in a world of style, culture, and creativity. Your fashion revolution starts here.
<br/>
<Text fontSize={30} as="b">Stay Connected:</Text>
<br/>
Follow us on social media to stay updated with the latest trends, exclusive offers, and fashion inspiration. Connect with us on Instagram, Facebook, and Twitter [@VersenciaApp].
<br/>
<Text fontSize={30} as="b">Contact Information:</Text>
<br/>
For any inquiries, suggestions, or assistance, feel free to reach out to our dedicated customer support team at support@versencia.com.

Discover. Express. Transform with Versencia - Your Fashion Odyssey.
        </Text>
      </VStack>
</Box>
      <Divider my={8} />

      {/* Add more sections as needed */}
    </Container>
  );
};

export default About;
