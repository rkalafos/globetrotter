import {Box, Text, useColorModeValue} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";

function JoinRace(racerName: string, raceCode: string) {

}

export const Join = () => {
    return (
        <DefaultLayout>
                <Card>
                    <Box m={8} p={8} textAlign={'center'}>
                        <Text>To join an existing race, enter the mission code.</Text>
                    </Box>
                </Card>
        </DefaultLayout>
    );
}