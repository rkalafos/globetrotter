import {
    Heading,
    Button,
    Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Select,
    Stack, Text,
    VStack,
    useMediaQuery,
    IconButton,
    FormControl,
    FormLabel,
    Divider,
    Slider,
    SliderFilledTrack,
    SliderTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";
import {FaLocationArrow, FaRunning} from 'react-icons/fa';
import {VscCheck, VscError } from 'react-icons/vsc';
import {useEffect, useState } from 'react';
import {Field, FieldArray, Form, Formik } from 'formik';
import { TaskInput } from '../components/TaskInput';
import { useCreateRaceMutation } from '../services/api';
import { Coordinates } from '../types/dto';

interface Payload {
    location: Coordinates;
    labels: string[];
    pricePoint: 0 | 1 | 2 | 3 | 4;
}

enum LocationStatus {
    uninitialized,
    loading,
    success,
    error
};

export const Create = () => {
    const [askedForLocation, setAskedForLocation] = useState(false);
    const [isLargerThan500] = useMediaQuery('(min-width: 768px)');
    const [locationLoading, setLocationLoading] = useState<LocationStatus>(LocationStatus.uninitialized);
    const [geoLocation, setGeoLocation] = useState<Coordinates>();
    const [createRace, { data, error, isLoading }] = useCreateRaceMutation();

    useEffect(() => {
        if (askedForLocation && navigator.geolocation) {
            setLocationLoading(LocationStatus.loading);
            navigator.geolocation.getCurrentPosition(position => {
                setLocationLoading(LocationStatus.success);
                setGeoLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, () => {
                setLocationLoading(LocationStatus.error);
            });
        } else {
        }
    }, [askedForLocation]);

    const getLocationButtonIcon = () => {
        if (locationLoading === LocationStatus.loading) {
            return <FaRunning />;
        } else if (locationLoading === LocationStatus.error) {
            return <VscError/>;
        } else if (locationLoading === LocationStatus.success) {
            return <VscCheck />;
        } else {
            return <FaLocationArrow />;
        }
    }

    const userAskedForLocation = () => {
        setAskedForLocation(true);
    };

    const initalValues: Payload = {
        location: '',
        labels: [],
        pricePoint: 0,
    };


    return (
        <DefaultLayout>
            <Card>
                <VStack w={'full'}>
                    <Heading>Create A Race!</Heading>
                    <Text>Fill out this form to create a new adventure</Text>
                    <Formik
                        initialValues={initalValues}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(true);
                            createRace({
                                location: geoLocation || values.location,
                                labels: values.labels,
                                price_point: values.pricePoint,
                            })
                        }}
                    >
                        {props => (
                            <Form style={{ width: '100%'}}>
                            <VStack w='100%' spacing={4}>
                                <Stack w={'100%'} direction={'row'}>
                                    <FormControl isRequired>
                                        <Field as={Input} name={'location'} placeHolder={'Enter starting point'} isDisabled={locationLoading === LocationStatus.success} value={locationLoading === LocationStatus.success ? 'Using Current Location' : props.values.location} />
                                    </FormControl>
                                    {!isLargerThan500 ? <IconButton
                                            isLoading={locationLoading === LocationStatus.loading}
                                            disabled={locationLoading !== LocationStatus.uninitialized}
                                            bg='teal.500'
                                            color='white'
                                            _hover={{bg: 'teal.400'}}
                                            icon={getLocationButtonIcon()}
                                            aria-label='location'
                                            onClick={userAskedForLocation}/>
                                        : <Button
                                            isLoading={locationLoading === LocationStatus.loading}
                                            disabled={locationLoading !== LocationStatus.uninitialized}
                                            leftIcon={getLocationButtonIcon()}
                                            bg={'teal.500'}
                                            color={'white'}
                                            _hover={{bg: 'teal.400'}}
                                            minWidth={{base: '150px', xs: '100px', sm: '200px', md: '250px'}}
                                            onClick={userAskedForLocation}
                                        >
                                            Use Current Location
                                        </Button>
                                    }
                                </Stack>
                                <Divider />
                                <Text>Price Point: {Array(props.values.pricePoint + 1).fill('$').join('')}</Text>
                                <Slider defaultValue={props.values.pricePoint + 1} min={1} max={5} step={1} onChange={val => props.setFieldValue('pricePoint', val - 1)}>
                                    <SliderTrack>
                                        <SliderFilledTrack bg='teal.600' />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>

                                <FieldArray name='labels' render={() => {
                                    return props.values.labels.map((label, i) =>
                                        <TaskInput
                                            index={i}
                                            value={label}
                                            remove={(index: number) => {
                                                props.values.labels.splice(index, 1);
                                                props.setFieldValue('labels', props.values.labels);
                                            }}
                                            onChange={(value) => {
                                                props.values.labels[i] = value;
                                                props.setFieldValue('labels', props.values.labels);
                                            }}
                                        />);
                                }} />

                                <Button onClick={() => {
                                    props.values.labels.push('');
                                    props.setFieldValue('labels', props.values.labels);
                                }}>Add Task</Button>

                                <Divider />

                                <Button
                                    rightIcon={<FaRunning />}
                                    disabled={(!props.values.location && locationLoading !== LocationStatus.success) || !props.values.labels.length}
                                    isLoading={props.isSubmitting}
                                    type='submit'
                                    bg='teal.500'
                                    color='white'
                                    _hover={{bg: 'teal.400'}}
                                    w='full'
                                >
                                    Generate Your Race
                                </Button>

                            </VStack>
                        </Form>
                        )}
                    </Formik>
                </VStack>
            </Card>
        </DefaultLayout>
    );
}