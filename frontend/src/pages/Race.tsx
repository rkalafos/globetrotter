import { Text, VStack, Stack, Heading, Flex, Grid, GridItem, Alert, AlertIcon, AlertDescription, AlertTitle, CloseButton, Icon } from '@chakra-ui/react';
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { TaskCard } from "../components/TaskCard";
import { FaUser, FaLink } from 'react-icons/fa';
import { useRaceContext } from '../services/RaceProvider';
import { useGetRaceQuery } from '../services/api';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query/react';
import constants from "../constants";
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
    const [alertVisible, setAlertVisible] = useState(true);
    const [copiedAlertVisible, setCopiedAlertVisible] = useState(false)
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

    const shareLinkAlert = () => {
        const closeAlert = () => {
            setAlertVisible(false)
        }

        return (
            <Alert status='info' variant='subtle' flexDirection='column' alignItems='center' textAlign='center'>
                <AlertIcon />
                <AlertTitle mr={2}>Welcome to your amazing race!</AlertTitle>
                <AlertDescription>Click the link icon below to share this race with your friends.</AlertDescription>

                <CloseButton onClick={() => closeAlert()} position='absolute' right='8px' top='8px' />
            </Alert>
        )
    }

    const copiedLinkAlert = () => {
        return (
            <Alert status='success' >
                <AlertIcon />
                <AlertTitle mr={2}>Link copied to clipboard!</AlertTitle>
            </Alert>
        )
    }

    const dashboard = () => {
        const copyLink = () => {
            const link = constants.SITE_DOMAIN + '/race/' + race?.id
            navigator.clipboard.writeText(link)

            setCopiedAlertVisible(true)

            setTimeout(() => {
                setCopiedAlertVisible(false)
            }, 5000)
        }

        return (
            <>
                {alertVisible && shareLinkAlert()}
                {copiedAlertVisible && copiedLinkAlert()}
                <Card bg="#ffffffe8" w={'full'}>
                    <VStack w={'full'}>
                        <Stack direction={'row'}>
                            <Heading>
                                <Flex>Your Amazing Race <Icon as={FaLink} _hover={{ cursor: 'pointer' }} onClick={() => copyLink()} w={6} h={6} style={{ marginTop: '12px', marginLeft: '12px' }} /></Flex>
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
            </>
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