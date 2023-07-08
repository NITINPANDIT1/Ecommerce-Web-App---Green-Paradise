

import React, { useState } from 'react';
import CartItem from './CartItem';
import { useSelector,useDispatch } from 'react-redux';

import './Styles/Cart.css';

import { Heading, Grid, Box } from '@chakra-ui/react';
import { Example } from './Stepper';
import PersonalInfoForm from './PersonalInfo';
import DeliveryDetailsForm from './Delivery';
import PaymentForm from './Payment';
import OTPPage from './Otp';
import Success from './Success';

function Cart() {
                let dispatch=useDispatch()
  const [page, setPage] = useState(0);
  const cartItems = useSelector((store) => store.cart);

  const increaseQuantity = (itemId) => {
    
     dispatch({type:"incQ",payload:itemId})
  };

  const decreaseQuantity = (itemId) => {
  
    dispatch({type:"decQ",payload:itemId})
  };

  const removeItem = (itemId) => {
    
    dispatch({type:"del",payload:itemId})
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  console.log(page);

  return (
    <Box >
      <Heading>Shopping Cart</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%" margin="auto">
        <div>
          <Heading>Check out</Heading>
          <Box className="stepper">
            <Example page={page} />
            {page === 0 ? (
              <PersonalInfoForm setIt={setPage} />
            ) : page === 1 ? (
              <DeliveryDetailsForm setIt={setPage} />
            ) : page === 2 ? (
              <PaymentForm setIt={setPage} />
            ) : page === 3 ? (
              <OTPPage setIt={setPage} />
            ) : page === 4 ? (
              <Success />
            ) : (
              ''
            )}
          </Box>
        </div>
        <div className="cart-items" >
        <Heading>Your order</Heading>
          <Box style={{ maxHeight: '550px', overflowY: 'auto' }}>
          
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          ))}
         </Box>
         <Box>
         <Heading size="md">Total: ${calculateTotal()}</Heading>
         </Box>
        </div>
       
      </Grid>
    </Box>
  );
}

export default Cart;
