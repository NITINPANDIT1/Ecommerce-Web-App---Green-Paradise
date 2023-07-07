import React from 'react';
import { Box, Heading, Image,Center, Link ,Button} from '@chakra-ui/react'
const Success = () => {
  return (
    <Box >
      <Center><Image
  borderRadius='full'
  boxSize='150px'
  src='https://media2.giphy.com/media/stYnZNptINFsY/giphy.gif?cid=ecf05e47nkg6rh08tdaqjk08derth13lx612borl3x66pd8u&ep=v1_gifs_search&rid=giphy.gif&ct=g'
  alt='Dan Abramov'
/></Center>
    
      <Heading>Payment Successfull</Heading>
      <Button as={Link} to={"/"} colorScheme={'teal'} >Home</Button>
    </Box>
  );
};

export default Success;
