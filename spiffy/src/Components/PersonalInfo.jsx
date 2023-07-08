import React, { useState } from 'react';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const PersonalInfoForm = ({setIt}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
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
    setIt(1) 
  };

  return (
    <ChakraProvider>
      <Box maxWidth="400px" mx="auto" mt={8} p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" >Next</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default PersonalInfoForm;
