import {useNavigate} from "react-router-dom";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Card} from "../components/Card";
import {Heading, Input, FormLabel, Button, Box} from "@chakra-ui/react";
import {Form, Formik, FormikHelpers, FormikValues} from "formik";
import {useGetRaceQuery, useJoinRaceMutation} from "../services/api";
import {useEffect, useState} from "react";
import {skipToken} from "@reduxjs/toolkit/query/react";


export const FindRace = () => {
    const navigate = useNavigate();
    const [raceId, setRaceId] = useState<string | undefined>(undefined);
    const { isSuccess, data, error, isLoading }  = useGetRaceQuery(raceId ?? skipToken);
    // Everytime result is changed, this code is run.
    useEffect(() => {
        if (data && isSuccess) {
            // Navigate to the race we created
            navigate('/race/' + data.id)
        }
        if (error) {
            // TODO: Let the user know that their request errored
        }
    })
    return (
        <DefaultLayout>
            <Card>
                <Box m={2} p={2} textAlign={'center'}>
                    <Formik
                        initialValues={{ raceId: '' }}
                        onSubmit={(values, formik: FormikHelpers<FormikValues>) => setRaceId(values.raceId)}
                    >
                        <Form>
                            <Heading>Find Your Race</Heading>
                            <FormLabel htmlFor='raceId'>
                                Race ID
                                <Input id='raceId' placeholder='XXXXXXXX' m={2}/>
                            </FormLabel>
                            <Button
                                mt={4}
                                colorScheme='teal'
                                type='submit'
                                isLoading={isLoading}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </Box>
            </Card>
        </DefaultLayout>
    );
};