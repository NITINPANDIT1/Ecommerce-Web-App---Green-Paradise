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
import { useDispatch } from "react-redux";

import { Link, useNavigate } from 'react-router-dom';
  
  export default function ProductSimple({id,src,name,price,data}) {
    const dispatch=useDispatch()
    const navigate=useNavigate()
     
    function HandleDetail(){
      dispatch({type:"put",payload:data})
      navigate(`/${name}`)
    }
    function AddToCart(id){
        // const foundObject = data.find((obj) => obj.id === key);
       
        let obj ={...data,id:id,quantity:1}
        dispatch({type:"AddToCart",payload: obj})
        
      }
    return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"} key={id}>
      <Image src={src} alt="product image" w={"100%"}/>
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl" color='black' onClick={HandleDetail}>
          {name}
        </Text>

        <Text mt="2" fontSize="lg" color='black'>
          ${price}
        </Text>
          <Button mt="4" bgColor="#486d00" onClick={()=>AddToCart(id)}>
            <Image src='https://i.imgur.com/rHyh6t7.png' alt='baket icon' h={"50%"}/>
          </Button>
      </Box>
    </Box>
    );
  }