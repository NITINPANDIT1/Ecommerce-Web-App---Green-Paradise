import { Box, Text, Image, Grid, Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function Details() {
  let dispatch = useDispatch();
  const { item } = useSelector((data) => {
    return data;
  });
  console.log(item);
  return (
    <Box margin="30px auto" maxW="container.xl">
      <Navbar mt={4} mb={4} />
      <Grid templateColumns="repeat(2, 1fr)">
        <Image src={item.image} />
        <Box width="80%" marginTop="3%">
          <Text
            color="#486d00"
            fontSize="300%"
            fontWeight="bold"
            align="left"
            marginBottom="5%"
          >
            {item.name}
          </Text>
          <Image
            marginTop="-5%"
            marginBottom="5%"
            chakra={{
              width: "100%",
            }}
            src="https://i.imgur.com/fSuJABV.png"
          />
          <Text color="black" align="left">
            {item.description}
          </Text>
          <Button
            mt="4"
            bgColor="#486d00"
            color="white"
            margin="5%"
            _hover={{ bgColor: "white", color: "black" }}
            alignSelf="Left"
            onClick={() => {}}
          >
            Add to Basket
          </Button>

          {item.care !== "N/A" && (
            <Box marginBottom="5%">
              <Heading
                align="left"
                fontSize="1.5vw"
                color="#486d00"
                marginBottom="3%"
              >
                Care
              </Heading>
              <Text color="black" align="left">
                {item.care}
              </Text>
            </Box>
          )}

          <Image margin="auto" width="80%" src="https://i.imgur.com/UmYpxxP.png" />
        </Box>
      </Grid>
      <Footer mt={4} />
    </Box>
  );
}
