import {
    Button,
    Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select,
    Stack,
    VStack,
} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";
import {FaLocationArrow} from 'react-icons/fa';

export const Create = () => {
    return (
        <DefaultLayout>
            <Card>
                <VStack w={'full'}>
                    <Stack w={'full'} direction={'row'}>
                        <Select placeholder={"Select a city..."}>
                            <option>Boston</option>
                            <option>London</option>
                            <option>Paris</option>
                        </Select>
                        <Button 
                            leftIcon={<FaLocationArrow />}
                            bg={'teal.700'}
                            color={'white'}
                            _hover={{ bg: 'teal.500' }}
                            width='250px'>

                            Use Current Location
                        </Button>
                    </Stack>
                    <Stack>

                    </Stack>
                    <Stack>

                    </Stack>
                </VStack>
            </Card>
        </DefaultLayout>
    );
}