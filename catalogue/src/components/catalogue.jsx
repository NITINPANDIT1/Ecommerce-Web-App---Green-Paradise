import React, { useEffect, useState } from "react";
import Logo from './Logo.png';
import { Box, Flex, Grid, Image, Button, Divider, Checkbox, Stack } from '@chakra-ui/react';
import axios from "axios";
import ProductSimple from "./card";

export default function Catalogue() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    axios.get(`https://run.mocky.io/v3/a20aeb27-2f92-4d11-987a-59059d501282`)
      .then(res => { setData(res.data); })
      .catch(err => { console.log(err); });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box w={"80%"} m={"auto"} padding={"2%"}>
      <Box>
        <Image src={Logo} alt="catalogue logo" />
      </Box>
      <Flex>
        <Box ml={4} mr={4}>
          <Box color={"black"} m={"auto"} w={"200px"}>
            <Stack>
            <Checkbox borderColor="black" colorScheme="black" > HousePlants </Checkbox>
            <Checkbox borderColor="black" colorScheme="black"> HousePlant Sets </Checkbox>
            <Checkbox borderColor="black" colorScheme="black"> Flowerpot </Checkbox>
            <Checkbox borderColor="black" colorScheme="black"> Soil and Fertilizer </Checkbox>
            </Stack>
          </Box>
          {/* Filter options go here */}
        </Box>
        <Grid w={"80%"} templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={5}>
          {currentItems.map((ele) => (
            <ProductSimple key={ele.id} src={ele.image} name={ele.name} price={ele.price} />
          ))}
        </Grid>
      </Flex>
      <Flex justifyContent="center" my={4} p={"1%"}>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            mx={1}
            colorScheme={currentPage === number ? "green" : "gray"}
            color={currentPage === number ? "white" : "black"}
            onClick={() => paginate(number)}
            bgColor={currentPage === number ? "green.500" : "gray.200"}
          >
            {number}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}
