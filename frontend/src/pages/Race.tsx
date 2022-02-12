import {Text, VStack, Stack, Heading, UnorderedList, ListItem} from '@chakra-ui/react';
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import {TaskCard} from "../components/TaskCard";
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
    ]
}


export const Race = () => {
    // Set the race
    const [race, setRace] = useState<Race | undefined>();
    // TODO: Query the actual race with the id from the url, and set the race to the object
    useEffect(() => {
        setRace(test_race)
    }, []);

    const raceCards = () => {
        return race?.tasks?.map(task => <TaskCard task={task}/>);
    };

    const dashboard = () => {
        return (
            <Card w={'full'}>
                <VStack w={'full'}>
                    <Stack direction={'row'}>
                        <Heading>
                            Race ID: {race?.id}
                        </Heading>
                    </Stack>
                    <Stack direction={'row'}>
                        <Text>
                            Location: {race?.location}
                        </Text>
                    </Stack>
                    <Stack direction={'row'}>
                        <Text>
                            Price Point: {Array((race?.price_point ?? 0) + 1).fill('$').join('')}
                        </Text>
                    </Stack>
                    <Stack direction={'row'}>
                        <Text>
                            Players:
                        </Text>
                    </Stack>
                    <Stack direction={'row'}>
                        <UnorderedList>
                            {race?.players?.map(
                                player => {
                                    return <ListItem>{player.name}</ListItem>
                                }
                            )}
                        </UnorderedList>
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
            <VStack>
                {race && dashboard()}
                {race && raceCards()}
                {!race && noRaceFound()}
            </VStack>
        </DefaultLayout>
    );
}