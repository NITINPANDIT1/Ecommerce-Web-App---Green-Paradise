import React, { useState } from 'react';
import { ChakraProvider, Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const OTPPage = ({setIt}) => {
   
  const [otp, setOTP] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setOTP(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    if(otp==="12345"){
      setIt(4)
    }else{
      alert("Wrong OTP, Try Again!!")
    }
     
  };

  return (
    <ChakraProvider>

      <Box maxWidth="400px" mx="auto" mt={8} p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel htmlFor="otp">Enter OTP</FormLabel>
            <Input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={handleChange}
              placeholder="Enter the OTP"
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">Verify</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default OTPPage;
