import {
    Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select,
    Stack,
    VStack,
} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";

export const Create = () => {
    return (
        <DefaultLayout>
            <VStack>
                <Stack direction={'row'}>
                    <Select placeholder={"Select city..."} bgColor={'white'} isRequired={true}>
                        <option value={"boston"}>Boston</option>
                    </Select>
                </Stack>
                <Stack direction={'row'}>
                    <RangeSlider aria-label={['min', 'max']} defaultValue={[1, 5]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>

                </Stack>
                <Stack direction={'row'}>

                </Stack>
            </VStack>

        </DefaultLayout>
    );
}