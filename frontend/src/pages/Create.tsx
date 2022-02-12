import {
    Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select,
    Stack,
    VStack,
} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";

export const Create = () => {
    return (
        <DefaultLayout>
            <Card>
                <VStack w={'full'}>
                    <Stack w={'full'}>
                        <Select placeholder={"Select a city..."}>
                            <option>Boston</option>
                            <option>London</option>
                            <option>Paris</option>
                        </Select>
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