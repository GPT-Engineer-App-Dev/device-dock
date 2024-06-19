import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications",
    price: "$199",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">Electronics Store</Heading>
        <Link href="#" display="flex" alignItems="center">
          <FaShoppingCart size="24px" />
          <Text ml={2}>Cart</Text>
        </Link>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.imageUrl} alt={product.name} mb={4} />
            <VStack align="start">
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Flex as="footer" justify="center" align="center" mt={8} p={4} borderTopWidth="1px">
        <Text>&copy; {new Date().getFullYear()} Electronics Store. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;