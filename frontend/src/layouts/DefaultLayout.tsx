import { Box, Center, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "../components/NavBar";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <VStack
            align={'center'}
            w={"full"}
            h={"100%"}
            backgroundImage={
                "url(/images/background.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
            position={"fixed"}
            overflowY={"auto"}
            sx={{
                "::-webkit-scrollbar": {
                    display: "none"
                },
                webkitOverflowScrolling: "touch"
            }}
            pb={'1$'}
        >
            <NavBar />
            <Stack as={Center} direction={'row'} w={'100%'}>
                {children}
            </Stack>
        </VStack>
    )
}