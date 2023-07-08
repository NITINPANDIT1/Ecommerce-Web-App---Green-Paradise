import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="darkGreen" color="white" borderRadius={"10px"} boxShadow="md" px={4} marginTop={"30px"} marginBottom={"30px"}>
      <Flex
        maxW="container.xl"
        h={16}
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link
          as={RouterLink}
          to="/"
          fontWeight="bold"
          fontSize="xl"
          color="white"
        >
          Green Paradise
        </Link>

        <Flex alignItems="center">
          <Link
            as={RouterLink}
            to="/cart"
            fontSize="sm"
            fontWeight="bold"
            color="white"
            _hover={{ textDecoration: 'none', opacity: 0.8 }}
          >
            Cart
          </Link>
          <Box ml={4}>
            <Link
              as={RouterLink}
              to="/catalouge"
              fontSize="sm"
              fontWeight="bold"
              color="white"
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
            >
              Products
            </Link>
          </Box>
          <Box ml={4}>
            <Link
              as={RouterLink}
              to="/login"
              fontSize="sm"
              fontWeight="bold"
              color="white"
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
            >
              Login
            </Link>
          </Box>
          
          <Button
            ml={4}
            size="sm"
            variant="outline"
            colorScheme="teal"
            textColor={"white"}
            _hover={{ opacity: 0.8 }}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
