import { Card } from "./Card";
import React from "react";
import { Badge, Box, BoxProps, Image, Text } from "@chakra-ui/react";
import constants from "../constants";
import { Task } from "../types/dto";

interface taskCardProps extends BoxProps {
    task: Task
}

export const TaskCard: React.FC<taskCardProps> = (props) => {
    return (
        <Card minW='100%' maxW='lg' borderWidth='1px' borderRadius='lg' overflow='wrap-text'>
            <Image
                float='left'
                align='center'
                boxSize='150px'
                objectFit='cover'
                src={'/images/task-placeholder.png'}
                alt={props.task.pointOfInterest.name}
            />
            <Box pl='30' >
                <Box display='flex' alignItems='baseline'>
                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                        {props.task.pointOfInterest.name ?? "Unknown Point of Interest"}
                    </Box>
                </Box>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs'
                    textTransform='uppercase' ml='2'>
                    {props.task.pointOfInterest.types ? [0] : 'Unknown type'}
                </Box>
                <Box>
                    <Text fontSize='sm'>{props.task.pointOfInterest.vicinity}</Text>
                </Box>
            </Box>
        </Card>
    )
};