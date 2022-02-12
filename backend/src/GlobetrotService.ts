import { Player, Race } from "./types";

export const fetchRace = (raceId : string) : Race | undefined => {
    const dummyRace : Race = {
        tasks : [],
        players : [],
        id : raceId
    }
    return dummyRace;
}

export const saveAddPlayer = (raceId : string, player : Player) : boolean => {
    console.log(`Unimplemented! should add ${player} to ${raceId}`)
    return true;
}

export const saveRace = (player : Race) : boolean => {
    console.log(`Unimplemented! should add ${player}`)
    return true;
}

