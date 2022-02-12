import { Box, Flex, Heading, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {
    const navigate = useNavigate();
    return (
            <HStack
                backgroundColor='rgba(0,0,0,0.6)'
                width='100%'
                height={{ base: "10vh", md: "12vh" }}
                justifyContent='center'
            > 
                <Logo h={{ base: '50px', sm:'75px' }} />
                <Heading
                    onClick={() => navigate('/')}
                    color={'white'}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                    lineHeight={1.2}
                    opacity={'100%'}
                >
                    Globetrotter.
                </Heading>
            </HStack>
    )
}