import {Box, Center, Heading, Stack, VStack} from "@chakra-ui/react";
import React from "react";
import {useNavigate} from "react-router-dom";

export const DefaultLayout: React.FC = ({ children }) => {
    const navigate = useNavigate();
    return (
        <VStack
            align={'center'}
            w={"full"}
            h={"100vh"}
            backgroundImage={
                "url(/images/background.jpg)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <Box w={'100%'}>
                <Box
                    bgColor={'black'}
                    opacity={'60%'}
                    w={'100%'}
                    h={{ base: '100', sm: '100', md: '150' }}
                />
                <Heading
                    onClick={() => navigate('/')}
                    color={'white'}
                    w={'100%'}
                    position={'absolute'}
                    top={'0'}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={1.2}
                    opacity={'100%'}
                    textAlign={'center'}
                    p={10}
                >
                    Globetrotter.
                </Heading>
            </Box>
            <Stack as={Center} direction={'row'} w={'100%'}>
                {children}
            </Stack>
        </VStack>
    )
}