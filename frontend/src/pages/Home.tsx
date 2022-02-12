import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import React from "react";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <Flex p={20}>
                <VStack>
                    <Stack direction={'row'} p={2}>
                        <Button
                            onClick={() => navigate('create')}
                            bg={'teal.700'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'teal.500' }}
                        >
                            Create an Adventure
                        </Button>
                    </Stack>
                    <Stack direction={'row'} p={2}>
                        <Button
                            onClick={() => navigate('join')}
                            bg={'teal.700'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'teal.500' }}
                        >
                            Join an Adventure
                        </Button>
                    </Stack>
                </VStack>
            </Flex>
        </DefaultLayout>
    );
}