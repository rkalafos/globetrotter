import { Text, VStack, Stack, Heading, Flex, Grid, GridItem, Center } from '@chakra-ui/react';
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { FaUser } from 'react-icons/fa';
import { useRaceContext } from '../services/RaceProvider';
import { useGetRaceQuery } from '../services/api';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';
type Race = import('../types/dto').Race;

const test_race: Race = {
    id: "HACKBEANPOT-2022",
    location: "Boston",
    price_point: 2,
    tasks: [
        {
            pointOfInterest: {
                name: "Frog Pond",
                vicinity: "Boston Common",
            },
            description: "Ice Skating at the Boston Common Frog Pond!"
        },
        {
            pointOfInterest: {
                name: "Paul Revere Statue",
                vicinity: "The North End",
            },
            description: "Take a selfie with Paul Revere."
        },
        {
            pointOfInterest: {
                name: "Faneuil Hall",
                vicinity: "boston",
            },
            description: "Visit the historic Faneuil Hall Marketplace."
        },
        {
            pointOfInterest: {
                name: "Boston Symphony Orchestra",
                vicinity: "boston, huntington ave.",
            },
            description: "Enjoy the symphony with the world-famous BSO."
        }
    ],
    players: [
        {
            id: "0",
            name: "Britney Spears"
        },
        {
            id: "1",
            name: "Martha Stewart"
        },
        {
            id: "2",
            name: "Ye West"
        },
        {
            id: "0",
            name: "Cooche Man"
        },
        {
            id: "1",
            name: "Juan Sebastian"
        },
        {
            id: "2",
            name: "Mama Cita"
        },
    ]
}


export const Race = () => {
    // Set the race
    const { id } = useParams();
    const { currentRace: race, setCurrentRace: setRace } = useRaceContext();
    const { data, isLoading, error } = useGetRaceQuery(id && !race ? id : skipToken);
    // TODO: Query the actual race with the id from the url, and set the race to the object
    useEffect(() => {
        if (!race && data) {
            setRace(data);
        }
    }, [data]);

    const raceCards = () => {
        return race?.tasks?.map(task => <TaskCard task={task} />);
    };

    const peopleGridItems = () => {
        return race?.players?.map(player => <GridItem h='10' ><Flex><FaUser style={{
            marginTop: '5px',
            marginRight: '5px',
        }} />{player.name}</Flex></GridItem>)
    }

    const dashboard = () => {
        return (
// <<<<<<< Updated upstream
//             <Card bg="#ffffffe8" w={'full'}>
//                 <VStack w={'full'}>
//                     <Stack direction={'row'}>
//                         <Heading>
//                             {race?.id}
//                         </Heading>
//                     </Stack>
//                     <Stack direction={'row'}>
//                         <Text>
//                             <b>Location: </b>{race?.location}
//                         </Text>
//                     </Stack>
//                     <Stack direction={'row'}>
//                         <Text>
//                             <b>Price Point: </b>{Array((race?.price_point ?? 0) + 1).fill('$').join('')}
//                         </Text>
//                     </Stack>
//                     <Stack direction={'row'} pt='20px' pb='10px'>
//                         <VStack>
//                             <Grid templateColumns='repeat(3, 1fr)' gap={5}>
//                                 {peopleGridItems()}
//                             </Grid>
// =======
            <Card bg="#ffffffe8" w={'full'}>
                        <VStack w={'full'}>
                            <Stack direction={'row'}>
                                <Heading>
                                    Your Amazing Race
                                </Heading>
                            </Stack>
                            <Stack direction={'row'}>
                                <Text>
                                    <b>Location: </b> {typeof race?.location === 'string' ? race?.location : `${race?.location.lat} ${race?.location.lng}`}
                                </Text>
                            </Stack>
                            <Stack direction={'row'}>
                                <Text>
                                    <b>Price Point: </b> {Array((race?.price_point ?? 0) + 1).fill('$').join('')}
                                </Text>
                            </Stack>
                            <Stack direction={'row'} pt='20px' pb='10px'>
                                 <VStack>
                                     <Grid templateColumns='repeat(3, 1fr)' gap={5}>
                                         {peopleGridItems()}
                                    </Grid>
                                 </VStack>
                            </Stack>
                        </VStack>
            </Card>
        )
    }

    const noRaceFound = () => {
        return (
            <Heading>No race found!</Heading>
        )
    }

    return (
        <DefaultLayout>
            <VStack ml={'30px'} mr={'30px'} pb={'30px'}>
                {race && dashboard()}
                <Heading color={"white"}>YOUR RACE TASKS</Heading>
                {race && raceCards()}
                {!race && noRaceFound()}
            </VStack>
        </DefaultLayout>
    );
}