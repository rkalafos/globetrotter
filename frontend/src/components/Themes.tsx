import { Box, HStack, StackProps, Text, Heading, Button, Center } from '@chakra-ui/react'
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export const Themes:React.FC<StackProps> = (props) => {
    const [selectedTheme, setSelectedTheme] = useState<string | undefined>();
    return (
        <HStack
            w='full'
            spacing={4}
            justify='center'>
                <ThemeCard
                    title='Lesser Known.'
                    desc='Focus your race on places with less reviews to discover something new.'
                    setSelected={setSelectedTheme}
                    selected={selectedTheme}>
                </ThemeCard>
                <ThemeCard
                    title='Foodie'
                    desc='Tired of eating the same things all the time? Find some great new spots.'
                    setSelected={setSelectedTheme}
                    selected={selectedTheme}>
                </ThemeCard>
        </HStack>
    );
}

export interface ThemeCardProps {
    title: string;
    desc: string;
    setSelected: (selectedTheme: string | undefined) => void;
    selected: string | undefined;
}

const ThemeCard: React.FC<ThemeCardProps> = ({title, desc, setSelected, selected}) => {
    return (
      <Box
        bg='white'
        shadow='md'
        maxW='xs'
        borderWidth='1px'
        rounded='lg'
        p={5}>
            <Heading
            fontSize={'xl'}>
                {title}
            </Heading>
            <Text
                mt={4}
                mb={4}>
                {desc}
            </Text>
            <Center>
                <Button
                    p={5}
                    bg={selected === title ? 'teal.700' : 'white'}
                    textColor={selected === title ? 'white' : 'teal.700'}
                    leftIcon={selected === title ? <FaCheck /> : undefined}
                    _hover={{ bg: 'teal.500' }}
                    onClick={() => setSelected(title)}>
                    {selected === title ? 'Selected' : 'Select'}
                </Button>
            </Center>
      </Box>
    );
  }