import React, { useEffect, useState } from "react";
import Logo from './Logo.png';
import { Box, Flex, Grid, Image, Button, Checkbox, Stack, Text } from '@chakra-ui/react';
import axios from "axios";
import ProductSimple from "./card";

export default function Catalogue() {
  const [plants,setPlants]=useState([])
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const[house,setHouse]=useState(false)
  const[set,setSet]=useState(false)
  const[pot,setPot]=useState(false)
  const[soil,setSoil]=useState(false)

  useEffect(() => {
    axios.get(`https://run.mocky.io/v3/bbc909eb-c737-475b-aa3a-2c5424cfdc7f`)
      .then(res => { setPlants(res.data);setData(res.data);console.log(res.data) })
      .catch(err => { console.log(err); });
  }, []);

  useEffect(()=>{
    filter();
  },[house,set,pot,soil])
  function filter() {
    let newData = [];
    if (house) {
      newData = newData.concat(
        plants.filter((ele) => {
          return ele.category === "houseplant";
        })
      );
    }
    if (set) {
      newData = newData.concat(
        plants.filter((ele) => {
          return ele.category === "houseplantsets";
        })
      );
    }
    if (pot) {
      newData = newData.concat(
        plants.filter((ele) => {
          return ele.category === "plantpots";
        })
      );
    }
    if (soil) {
      newData = newData.concat(
        plants.filter((ele) => {
          return ele.category === "soil and fertilisers";
        })
      );
    }
    if (!house && !set && !pot && !soil) {
      newData = plants;
    }
    console.log(newData)
    setData(newData);
  }
  console.log(house,set,pot,soil)

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
              <Text align={"left"} onClick={()=>{setHouse(false);setSet(false);setPot(false);setSoil(false)}}> Reset Filter </Text>
              <Checkbox borderColor="black" colorScheme="black" isChecked={house} onChange={()=>{setHouse(!house)}}> HousePlants </Checkbox>
              <Checkbox borderColor="black" colorScheme="black" isChecked={set} onChange={()=>{setSet(!set)}}> HousePlant Sets </Checkbox>
              <Checkbox borderColor="black" colorScheme="black" isChecked={pot} onChange={()=>{setPot(!pot)}}> Flowerpot </Checkbox>
              <Checkbox borderColor="black" colorScheme="black" isChecked={soil} onChange={()=>{setSoil(!soil)}}> Soil and Fertilizer </Checkbox>
            </Stack>
          </Box>
        </Box>
        <Flex flexDirection="column" w={"100%"}>
          <Grid templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]} gap={5}>
            {currentItems.map((ele) => (
              <ProductSimple key={ele.id} src={ele.image} name={ele.name} price={ele.price} data={ele}/>
            ))}
          </Grid>
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
        </Flex>
      </Flex>
    </Box>
  );
}