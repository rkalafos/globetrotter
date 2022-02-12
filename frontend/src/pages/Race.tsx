import { Box, Text, Image, Badge, VStack } from '@chakra-ui/react';
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

export const Race = () => {
    type Race = import('../types/dto').Race;
    const [race, setRace] = useState<Race | undefined>();

    useEffect(() => {
        const race: Race = {
            id: "purpleDinosaur",
            numberOfTasks: 2,
            difficulty: 4,
            pricePoint: 4, //0-5
            dateCreated: '2022-02-12',
            theme: "Popular",
            location: "Boston", // address
            tasks: [{
                name: "The Harp",
                types: ["bar", "restaurant"], // establishment, point_of_interest
                price_point: 2, // 0-5
                rating: 3.7, //
                numberOfRatings: 145, // probably don't need
                vicinity: "80 Rocks Road",
                image: "images/task-placeholder.png"
            },
            {
                name: "Boda Borg",
                types: ["bar", "restaurant"], // establishment, point_of_interest
                price_point: 1, // 0-5
                rating: 4.8, // 
                numberOfRatings: 100, // probably don't need
                vicinity: "75 Causeway Street",
                image: "images/task-placeholder.png"
            }]
        }
        setRace(race)
    }, []);

    const raceCards = () => {
        return race && race.tasks && race.tasks.map(task => {
            let priceString = ""
            for (let i = 0; i < task.price_point; i++) {
                priceString += "$";
            }

            return (
                <Card maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={task.image} alt={task.name} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            {task.rating >= 4.0 &&
                                <Badge borderRadius='full' px='2' colorScheme='purple'>
                                    Popular
                                </Badge>
                            }
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {task.types[0]} &bull; {priceString}
                            </Box>
                        </Box>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {task.name}
                        </Box>

                        <Box>
                            {task.vicinity}
                        </Box>


                    </Box>
                </Card>
            );
        });
    };

    return (
        <DefaultLayout>
            <VStack>
                {raceCards()}
            </VStack>
        </DefaultLayout>
    );
}