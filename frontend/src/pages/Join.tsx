import {Box, Text, useColorModeValue} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";

function JoinRace(racerName: string, raceCode: string) {

}

export const Join = () => {
    return (
        <DefaultLayout>
                <Box p={8}
                     m={8}
                     w={'75%'}
                     bg={useColorModeValue('white', 'gray.800')}
                     boxShadow={'2xl'}
                     rounded={'md'}
                     overflow={'hidden'}
                >
                    <Box m={8} p={8} textAlign={'center'}>
                        <Text>To join an existing race, enter the mission code.</Text>
                    </Box>
                </Box>
        </DefaultLayout>
    );
}