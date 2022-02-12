import { Player, Race } from "./types";
import { GlobetrotDynamoClient } from "./dynamoClient";
import { TransactWriteItemsOutput } from "@aws-sdk/client-dynamodb";

export const fetchRace = async (raceId : string) : Promise<Race | undefined> => {
       const client = new GlobetrotDynamoClient()
       return await client.getRace(raceId);
}

export const saveAddPlayer = async (raceId : string, player : string) : Promise<boolean> => {
    console.log(`Unimplemented! should add ${player} to ${raceId}`)
    const client = new GlobetrotDynamoClient();
    return await client.addPlayer(raceId, player);
}

export const saveRace = async (race : Race) : Promise<boolean> => {
    const client = new GlobetrotDynamoClient();
    return await client.saveRace(race);
}

