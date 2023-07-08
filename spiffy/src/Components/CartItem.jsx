// CartItem.js
import React from 'react';
import { Button,Stack,Card,CardFooter,Text,Heading,CardBody,Image } from "@chakra-ui/react";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    

      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  w={"80%"}
  bgColor={"lightGreen"}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '250px' }}
    src={item.image}
    alt='Product Image'
  />

  <Stack>
    <CardBody >
      <Heading size='md' py='2'>{item.name}</Heading>

      <Heading size="sm" py='2'>
      Price: ${item.price} 
     
      </Heading >
      <Heading size="sm" py='2'>
      Quantity: {item.quantity}
     
      </Heading >
    
    </CardBody>

    <CardFooter>
    <Stack spacing={4} direction='row' align='center'>
      <Button colorScheme='teal' size='md' onClick={() => increaseQuantity(item.id)}> +</Button> 
       
      <Button colorScheme='teal' onClick={() => decreaseQuantity(item.id)}>-</Button>

     
      <Button colorScheme='teal' onClick={() => removeItem(item.id)}>Remove</Button>
      </Stack>
    </CardFooter>
  </Stack>
</Card>
    
  );
};

export default CartItem;
