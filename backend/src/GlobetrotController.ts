import { fetchRace, saveAddPlayer } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Player, Race, Task } from "./types";
import { exampleTasks } from "./examples";

export const getRace = (raceId : string) : Race | undefined => {
    return fetchRace(raceId);
}

export const createRace = (numTasks : number, initializedTasks : Record<number, Task>) => {
    const tasks : Task[] = Array(numTasks);
    Object.entries(initializedTasks).forEach(([key, value]) => {
        tasks[parseInt(key)] = value;
    })
   const generatedTasks = exampleTasks.sort(() => 0.5 - Math.random()).slice(0, numTasks - Object.keys(initializedTasks).length);

    tasks.map(task => {
        if (!task && !!generatedTasks.length) {
            return  generatedTasks.splice(0, 1)[0];
        } else {
            return undefined;
        }
    })
    const race : Race = {
        id : uuidv4(),
        tasks : tasks,
        players : []
    }

    const result = saveRace(race);
    return result ? race.id : undefined;
    
}


export const addPlayer = (player : string, raceId : string) => {
    return saveAddPlayer(raceId, player);
}