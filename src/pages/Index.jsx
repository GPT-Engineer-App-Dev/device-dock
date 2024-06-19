import { Box, Container, Flex, Heading, SimpleGrid, Text, VStack, Image, Link, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: 699,
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: 999,
    category: "Electronics",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Keep track of your health and notifications",
    price: 199,
    category: "Wearables",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 299,
    category: "Accessories",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="header" justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg">Electronics Store</Heading>
        <Input
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          width="300px"
          mr={4}
        />
        <Link href="#" display="flex" alignItems="center">
          <FaShoppingCart size="24px" />
          <Text ml={2}>Cart</Text>
        </Link>
      </Flex>

      <Flex mb={8} justify="space-between" align="center">
        <Select placeholder="Select category" width="200px" onChange={handleCategoryChange}>
          <option value="Electronics">Electronics</option>
          <option value="Wearables">Wearables</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Box width="300px">
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <Slider
            min={0}
            max={1000}
            step={50}
            defaultValue={[0, 1000]}
            onChangeEnd={handlePriceChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6} index={0} />
            <SliderThumb boxSize={6} index={1} />
          </Slider>
        </Box>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.imageUrl} alt={product.name} mb={4} />
            <VStack align="start">
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">${product.price}</Text>
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