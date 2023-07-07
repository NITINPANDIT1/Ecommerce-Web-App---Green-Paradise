import React, { useState } from 'react';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Button, Grid, GridItem } from '@chakra-ui/react';

const PaymentForm = ({setIt}) => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIt(3)  };

  return (
    <ChakraProvider>
      <Box maxWidth="400px" mx="auto" mt={8} p={4}>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <FormControl mb={4}>
                <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                <Input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </FormControl>
            </GridItem>
            
            <GridItem colSpan={1}>
              <FormControl mb={4}>
                <FormLabel htmlFor="expiryDate">Expiry Date</FormLabel>
                <Input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl mb={4}>
                <FormLabel htmlFor="cvv">CVV</FormLabel>
                <Input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="XXX"
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl mb={4}>
                <FormLabel htmlFor="cardHolder">Card Holder</FormLabel>
                <Input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
          </Grid>

          <Button type="submit" colorScheme="teal" mt={4} w="full">Submit Payment</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default PaymentForm;
