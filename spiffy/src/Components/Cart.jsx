// App.js
import React, { useState } from 'react';
import CartItem from './CartItem';

import "./Styles/Cart.css"

import {
    Heading
    ,Grid,GridItem,Box
} from "@chakra-ui/react"

import { Example } from './Stepper';
import PersonalInfoForm from './PersonalInfo';
import DeliveryDetailsForm from './Delivery';
import PaymentForm from './Payment';
import OTPPage from './Otp';
import Success from './Success';

function Cart() {
    let [page,setPage] =useState(0)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 5, quantity: 1 },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
 console.log(page)
  return (
   <Box textColor="white">
    <Heading>Shopping Cart</Heading>
    <Grid templateColumns='repeat(2, 1fr)' gap={6} w="100%" margin="auto">
      <div>
      <Heading >Check out</Heading>
      <Box className="stepper" >
      
       <Example page={page}  />
       {
        page=== 0?<PersonalInfoForm setIt={setPage}/>:page===1?<DeliveryDetailsForm setIt={setPage}/>:page===2?<PaymentForm setIt={setPage}/>:page===3?<OTPPage setIt={setPage}/>:page==4?<Success/>:""
       }
       
      </Box>
      </div>
      <div className="cart-items"  >
      <Heading>Your order</Heading>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ))}
        <Heading size="md">Total: ${calculateTotal()}</Heading >
      </div>
      
   </Grid>
   </Box>
  );
}

export default Cart;


