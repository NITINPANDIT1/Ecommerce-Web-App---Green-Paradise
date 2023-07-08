import React, { useState } from 'react';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const DeliveryDetailsForm = ({setIt}) => {
  const [formData, setFormData] = useState({
   
    address: '',
    city: '',
    postalCode: '',
    additionalNotes: '',
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
    setIt(2)
  };

  return (
    <ChakraProvider>
      <Box maxWidth="400px" mx="auto" mt={8} p={4}>
        <form onSubmit={handleSubmit}>
          

          <FormControl mb={4}>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
            <Input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="additionalNotes">Additional Notes</FormLabel>
            <Textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">Submit</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default DeliveryDetailsForm;
