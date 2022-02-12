import { Player, Race } from "./types";
import { GlobetrotDynamoClient } from "./dynamoClient";

export const fetchRace = (raceId : string) : Race | undefined => {
       const client = new GlobetrotDynamoClient()
       return client.getRace(raceId);
}

export const saveAddPlayer = (raceId : string, player : string) : boolean => {
    console.log(`Unimplemented! should add ${player} to ${raceId}`)
    const client = new GlobetrotDynamoClient();
    return client.addPlayer(raceId, player);
}

export const saveRace = (race : Race) : boolean => {
    const client = new GlobetrotDynamoClient();
    return  client.saveRace(race);
}

