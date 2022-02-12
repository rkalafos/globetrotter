import {Box, useColorModeValue} from "@chakra-ui/react";
import React from "react";

export const Card: React.FC = ({children}) => {
    return (
        <Box p={8}
             m={8}
             w={'75%'}
             bg={useColorModeValue('white', 'gray.800')}
             boxShadow={'2xl'}
             rounded={'md'}
             overflow={'hidden'}
        >
            {children}
        </Box>
    );
}