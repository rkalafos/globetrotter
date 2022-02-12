import { Player, Race } from "./types";
import { examplePlayers, exampleTasks } from "./examples";

export const fetchRace = (raceId : string) : Race | undefined => {
    const dummyRace : Race = {
        tasks : exampleTasks,
        players : Object.values(examplePlayers),
        id : raceId
    }
    return dummyRace;
}

export const saveAddPlayer = (raceId : string, player : string) : number => {
    console.log(`Unimplemented! should add ${player} to ${raceId}`)
    return 1;
}

export const saveRace = (player : Race) : string => {
    console.log(`Unimplemented! should add ${player}`)
    console.log(player);
    const sessionId = '1234'
    return sessionId;
}

