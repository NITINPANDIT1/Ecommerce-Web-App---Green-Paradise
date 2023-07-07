import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
  
  const IMAGE =
    'https://hortology.co.uk/cdn/shop/products/Polyscias-Fabian-Aralia-Fabian-27x100cm_5000x.jpg?v=1686670806';
  
  export default function ProductSimple({key,src,name,price}) {
    return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"} key={key}>
      <Image src={IMAGE} alt="product image" />

      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" color='black'>
          {name}
        </Text>

        <Text mt="2" fontSize="lg" color='black'>
          ${price}
        </Text>

        <Button mt="4" bgColor="#486d00">
          Add to cart
        </Button>
      </Box>
    </Box>
    );
  }