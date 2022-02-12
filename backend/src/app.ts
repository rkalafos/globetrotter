import express from 'express';
import { CreateRacePayload, JoinRacePayload } from './types';
import { getRace, createRace, addPlayer } from './GlobetrotController';
import { BAD_REQUEST, OK } from './StatusCode';

const app = express();
const port = 8081; // default port to listen
const serverless = require('serverless-http')
app.use(express.json());

const registerRoutes = () => {
    // define a route handler for the default home page
    app.get( "/", ( req, res ) => {
        console.log(req)
        res.status(OK).json({'message': 'hello globetrotter!'});
    });

    // declare a type 
    app.get( "/race/:raceId", ( req, res ) => {
        const raceId = req.params.raceId;
        const race = getRace(raceId);
        if (race) {
            res.status(OK).json(race)
        } else {
            res.status(BAD_REQUEST).json({'message': `unable to find race with id ${raceId}`})
        }

        res.send( "Hello world!" );
    });

    app.post( "/race", ( req, res) => {
        const body = req.body;
        const validBody = req.body && req.body.numberOfTasks && req.body.filledTasks;
        //TODO actually check the body is the correct type.
        if (validBody) {
            const { numberOfTasks, filledTasks } = body as CreateRacePayload
            const result = createRace(numberOfTasks, filledTasks)
        } else {
        res.status(BAD_REQUEST).json({'message': 'invalid request body'}) 
        }
    })

    app.put( "/race/:raceId", ( req, res) => {
        const body = req.body;
        const validBody = body && body.player
        const raceId = req.params.raceId
        //TODO actually check the body is the correct type.
        if (validBody && raceId) {
            const { player } = body as JoinRacePayload
            const result = addPlayer(player, raceId);
            if (result) {
                res.status(OK).json(result);
            } else {
                res.status(BAD_REQUEST).json({
                    'message' : `unable to add player to race with id ${raceId}`
                })
            }
        }
    });
}

registerRoutes();
console.log('REGISTERED')
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
    
module.exports.handler = serverless(app);