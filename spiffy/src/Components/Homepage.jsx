import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link ,useLocation} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Home(){

    const location = useLocation();
    console.log(location.state);
    // console.log(location.state.name);
    const [review,setReview]=useState([])
    const[current,setCurrent]=useState(0)
    
    useEffect(()=>{
        axios.get(`https://run.mocky.io/v3/8a72ada7-3e84-4fd6-a3ce-f4ff49478e8c`)
        .then(res=>{console.log(res.data.customerReviews);setReview(res.data.customerReviews)})
        .catch(err=>{console.log(err)})
    },[])

    function Next(){
        if(current===review.length-1){
            setCurrent(0)
        }else{
            setCurrent(current+1)
        }
    }

    function Prev(){
        if(current===0){
            setCurrent(review.length-1)
        }else{
            setCurrent(current-1)
        }
    }
    
    var currentReview = review[current]
    return (
       
        <Box w={"80%"} m={"auto"}>
            {/* <Box><Heading>`Hi ${location.state.name} `</Heading></Box> */}
             <Navbar/>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
                <Box>
                    <Box marginTop={"15%"}>
                    <Heading color={"#466c01"}>
                        Create
                    </Heading>
                    <Heading color={"#466c01"}>
                        a green paradise
                    </Heading>
                    <Heading color={"#466c01"}>
                        right at Home
                    </Heading>
                    </Box>
                    <Center>
                    <Image src="https://i.imgur.com/fSuJABV.png"/>
                    </Center>
                    <Text color={"#466c01"} margin={"5%"}>
                        20% of the profit goes to the arme forces of Ukrain
                    </Text>
                    <Button bgColor={"#466c01"} color={"white"}>
                        Catalogue
                    </Button>
                </Box>
                <Box>
                    <Image src="https://i.imgur.com/pSzVFv5.png" alt="image 1"/>
                </Box>
            </Grid>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4} marginTop={"10%"}>
                <Box>
                    <Image src="https://i.imgur.com/oPCd6ao.png" alt="image 2"/>
                </Box>
                <Box>
                    <Heading color={"#466c01"}>
                        About us
                    </Heading>
                    <Center>
                    <Image src="https://i.imgur.com/fSuJABV.png"/>
                    </Center>
                    <Text color={"black"}>
                        We are a store of indoor plants of various types in Kyiv. Hundreds of different types of plants: from ficuses to ferns. We love and cherish our plants from their very "birth", so they will definitely bring happiness, joy, love and comfort to your home.
                    </Text>
                </Box>
            </Grid>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4} marginTop={"10%"}>
                <Box bgColor="#fcfae0" padding="5%">
                {review.length > 0 ? (
                    <>
                    <Heading fontSize="m" color="black" fontWeight="bold">
                        {review[current].name}
                    </Heading>
                    <Text marginTop="5%" color="black">
                        {review[current].review}
                    </Text>
                    <Box margin="5%">
                        <Center>
                        <Flex gap={4}>
                            <Button
                            bgColor="#466c01"
                            borderRadius="100%"
                            onClick={Prev}
                            >
                            <ArrowBackIcon />
                            </Button>
                            <Text marginTop="5%" color="black">
                            {current + 1}
                            </Text>
                            <Button
                            bgColor="#466c01"
                            borderRadius="50%"
                            onClick={Next}
                            >
                            <ArrowForwardIcon />
                            </Button>
                        </Flex>
                        </Center>
                    </Box>
                    </>
                ) : (
                    <Text>Loading...</Text>
                )}
                </Box>
                <Box>
                    <Heading color={"#466c01"}>
                        What our
                    </Heading>
                    <Heading color={"#466c01"}>
                        Customers think
                    </Heading>
                    <Center>
                    <Image src="https://i.imgur.com/fSuJABV.png"/>
                    </Center>
                    <Text color={"black"}>
                        We have many testimonials from new and regular customers. You can trust us, because we love our work and provide you with only honest reviews.
                    </Text>
                </Box>
            </Grid>
            <Box marginTop={"10%"}>
                <Grid templateColumns={["1fr", "1fr 1fr"]} gap={4}>
                    <Box textAlign={["center", "left"]}>
                        <Heading color={"#466c01"}>Categories</Heading>
                        <Image w={["50%", "30%"]} src="https://i.imgur.com/fSuJABV.png"/>
                    </Box>
                    <Box textAlign={["center", "right"]} marginTop={["4", "0"]}>
                        <Button bgColor={"#466c01"} color={"white"}>
                            Catalogue
                        </Button>
                    </Box>
                </Grid>
                <Grid marginTop={"5%"} templateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]} gap={4}>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"}>
                        <Image src="https://hortology.co.uk/cdn/shop/products/Anthurium-Royal-Champion-2_5000x.jpg?v=1681983497" alt="product image" w={"100%"}/>
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" color='black'>
                             HousePlants
                            </Text>
                            <Link>
                                <ArrowForwardIcon color={"black"}/>
                            </Link>
                        </Box>
                    </Box>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"}>
                        <Image src="https://hortology.co.uk/cdn/shop/products/Senecio-Radicans-String-of-Bananas_5000x.jpg?v=1620892311" alt="product image" w={"100%"}/>
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" color='black'>
                             HousePlants sets
                            </Text>
                            <Link>
                                <ArrowForwardIcon color={"black"}/>
                            </Link>
                        </Box>
                    </Box>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"}>
                        <Image src="https://hortology.co.uk/cdn/shop/products/Peperomia-obtusifolia-Green-Baby-Rubber-Plant-Iris-Turquoise-Plant-Pot_d725b613-33c0-4d84-832d-aa4797b48cfd_5000x.jpg?v=1659537932" alt="product image" w={"100%"}/>
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" color='black'>
                             flowerpot
                            </Text>
                            <Link>
                                <ArrowForwardIcon color={"black"}/>
                            </Link>
                        </Box>
                    </Box>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bgColor={"#fcfae0"}>
                        <Image src="https://hortology.co.uk/cdn/shop/products/Houseplant-Focus-Repotting-Mix-Peat-Free-3-litre_5000x.jpg?v=1638368722" alt="product image" w={"100%"}/>
                        <Box p="6">
                            <Text fontWeight="bold" fontSize="xl" color='black'>
                             soil fertiliser
                            </Text>
                            <Link>
                                <ArrowForwardIcon color={"black"}/>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4} marginTop={"10%"}>
                <Box>
                    <Image src="https://i.imgur.com/qAMSyIe.png" />
                </Box>
                <Box>
                <Heading color={"#466c01"}>
                        Delivery & Payment
                    </Heading>
                    <Center>
                    <Image src="https://i.imgur.com/fSuJABV.png"/>
                    </Center>
                    <Text color={"black"}>
                     We package our plants securely yet sustainably by reusing boxes, paper (newspapers), etc. Delivery is carried out to all cities of Ukraine, except for the occupied ones. Pickup is possible in Kyiv.
We have full & partial prepayment by card and cash on delivery to make you feel completely secure. We have many testimonials from new and regular customers.
                    </Text>
                    <Button margin={"5%"} bgColor={"#466c01"} color={"white"}>
                        Catalogue
                    </Button>
                </Box>
            </Grid>
            <Grid marginTop={"10%"}>
                <Grid templateColumns={["1fr", "1fr 1fr"]} gap={4}>
                    <Box textAlign={["center", "left"]}>
                        <Heading color={"#466c01"}>Find us on Instagram</Heading>
                        <Image w={["50%", "60%"]} src="https://i.imgur.com/fSuJABV.png"/>
                    </Box>
                    <Box textAlign={["center", "right"]} marginTop={["4","0"]}>
                        <Button color={"#466c01"} border={"1px"} borderColor={"#466c01"}>
                            More Details
                        </Button>
                    </Box>
                </Grid>
                <Grid marginTop={"5%"} templateColumns={["1fr", "1fr 1fr 1fr"]}>
                    <Box>
                        <Image w={"90%"} objectFit="cover" src="https://i.imgur.com/7WGEa0b.png"/>
                    </Box>
                    <Box>
                        <Image w={"90%"} objectFit="cover" src="https://i.imgur.com/YvEenAo.png"/>
                    </Box>
                    <Box>
                        <Image w={"90%"} objectFit="cover" src="https://i.imgur.com/cpamwh5.png"/>
                    </Box>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
}