import {Box, Button, Divider, FormLabel, Heading, HStack, Input, Text} from '@chakra-ui/react';
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";
import {Formik, FormikValues, FormikHelpers, Form} from 'formik';
import {useJoinRaceMutation} from "../services/api";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export interface JoinFormValues {
    playerName: string;
    raceId: string;
}


export const Join = () => {
    const navigate = useNavigate();
    const initialValues: JoinFormValues = {playerName: '', raceId: ''};
    const [joinRequest, result]  = useJoinRaceMutation();
    // Everytime result is changed, this code is run.
    useEffect(() => {
        if (result && result.isSuccess) {
            // Navigate to the race we created
            navigate('/race/' + result.data.raceId)
        }
        if (result && result.isError) {
            // TODO: Let the user know that their request errored
        }
    }, [result])
    return (
        <DefaultLayout>
                <Card>
                    <Box m={2} p={2} textAlign={'center'}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values, formik: FormikHelpers<FormikValues>) => joinRequest(values as JoinFormValues)}
                        >
                            <Form>
                                <Heading>Join a Race</Heading>
                                <FormLabel htmlFor='playerName' m={2}>
                                    Name
                                    <Input id='playerName' placeholder='Please enter your name' />
                                </FormLabel>

                                <FormLabel htmlFor='raceId'>
                                    Race ID
                                    <Input id='raceId' placeholder='some-race' m={2}/>
                                </FormLabel>
                                <HStack>
                                    <Button
                                        m={4}
                                        colorScheme='gray'
                                        variant='outline'
                                        onClick={() => {navigate('/find')}}
                                    >
                                        Already Part of an Adventure?
                                    </Button>
                                    <Divider orientation='vertical' flexBasis={1}/>
                                    <Button
                                        m={4}
                                        colorScheme='teal'
                                        type='submit'
                                        isLoading={result.isLoading}
                                    >
                                        Submit
                                    </Button>
                                </HStack>
                            </Form>
                        </Formik>
                    </Box>
                </Card>
        </DefaultLayout>
    );
};