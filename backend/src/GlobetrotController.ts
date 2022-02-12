import { fetchRace } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Race, Task } from "./types";

export const getRace = (raceId : string) : Race | undefined => {
    return fetchRace(raceId);
}

export const createRace = (numTasks : number, initializedTasks : { task : Task, order : number }[]) => {
    const tasks = Array(numTasks);

    const race : Race = {
        id : uuidv4(),
        pointsOfInterest : [],
        players : []
    }
    const result = saveRace(race)
    return result;
}