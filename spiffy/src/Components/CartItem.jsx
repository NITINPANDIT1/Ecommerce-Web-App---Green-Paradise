// CartItem.js
import React from 'react';
import { Button,Stack,Card,CardFooter,Text,Heading,CardBody,Image } from "@chakra-ui/react";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    

      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{item.name}</Heading>

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
