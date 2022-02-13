import express from 'express';
import 'dotenv/config';
import { CreateRacePayload, JoinRacePayload } from './types';
import { getRace, createRace, addPlayer } from './GlobetrotController';
import { BAD_REQUEST, OK } from './StatusCode';

const app = express();
const port = 8081; // default port to listen
const serverless = require('serverless-http');
var cors = require('cors');
app.use(express.json());
app.use(cors());

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

    app.post( "/race", async ( req, res) => {
        const body = req.body;
        const validBody = req.body && req.body.location && req.body.labels && req.body.price_point;
        //TODO actually check the body is the correct type.
        if (validBody) {
            const { location, labels, price_point } = body as CreateRacePayload
            try {
                const result = await createRace(location, price_point, labels);
                res.status(OK).json(result)
            } catch (e) {
                res.status(BAD_REQUEST).json({'message':'invalid keyword'})
            }
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
                res.status(OK).json({
                    'message' : `added player ${player} with id ${result} to race: ${raceId}`
                });
            } else {
                res.status(BAD_REQUEST).json({
                    'message' : `unable to add player to race with id ${raceId}`
                })
            }
        } else {
            res.status(BAD_REQUEST).json({
                'message': 'bad request body'
            })

        }
    });
}

registerRoutes();
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
    
module.exports.handler = serverless(app);