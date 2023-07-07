import { Box,Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

export function Details(){

    const {item}=useSelector((data)=>{
        return data;
    })
    const name=useParams();
    console.log(item)
    return (
        <Box>
            <Text color={"black"}>
                {name.name}
            </Text>
        </Box>
    );
}