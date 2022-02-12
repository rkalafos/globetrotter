import express from 'express';
import { CreateRacePayload } from './types';
import { getRace, createRace } from './GlobetrotController';
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello globetrotters!" );
});

// declare a type 
app.get( "/race/:raceId", ( req, res ) => {
    const raceId = req.params.raceId;
    const race = getRace(raceId);
    if (race) {

        res.send(race);
    }

    res.send( "Hello world!" );
});

app.post( "race", ( req, res) => {
    const body = req.body;
    const validBody = req.body && req.body.numberOfTasks && req.body.filledTasks;
    //TODO actually check the body is the correct type.
    if (validBody) {
        const { numberOfTasks, filledTasks } = body as CreateRacePayload
        const result = createRace(numberOfTasks, filledTasks)
    }
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );