import { Card } from "./Card";
import React from "react";
import { Badge, Box, BoxProps, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import constants from "../constants";
import { Task } from "../types/dto";

interface taskCardProps extends BoxProps {
    task: Task
}

export const TaskCard: React.FC<taskCardProps> = (props) => {
    return (
        <Card bg="#ffffffe8" minW='100%' maxW='lg' borderWidth='1px' borderRadius='lg' overflow='wrap-text'>
            <Grid templateColumns='repeat(2, 1fr)'>
                <GridItem>
                    <Image
                        float='left'
                        align='center'
                        boxSize='150px'
                        objectFit='cover'
                        src={'/images/task-placeholder.png'}
                        alt={props.task.pointOfInterest.name}
                    />
                </GridItem>
                <GridItem>
                    <Box ml='5px'>
                        <Box display='flex' alignItems='baseline' overflow="wrap-text">
                            <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
                                {props.task.pointOfInterest.name ?? "Unknown Point of Interest"}
                            </Box>
                        </Box>
                        <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs'
                            textTransform='uppercase'>
                            {props.task.pointOfInterest.types ? [0] : 'Unknown type'}
                        </Box>
                        <Box>
                            <Text fontSize='sm'>{props.task.pointOfInterest.vicinity}</Text>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </Card>
    )
};