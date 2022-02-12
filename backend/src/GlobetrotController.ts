import { fetchRace, saveAddPlayer } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Player, Race, Task } from "./types";
import { exampleTasks } from "./tasks";

export const getRace = (raceId : string) : Race | undefined => {
    return fetchRace(raceId);
}

export const createRace = (numTasks : number, initializedTasks : { task : Task, order : number }[]) => {
    const tasks = Array(numTasks);
    initializedTasks.forEach(task => {
        tasks[task.order] = task.task;
    })
    const generatedTasks = exampleTasks.sort(() => 0.5 - Math.random()).slice(0, numTasks - initializedTasks.length);

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
    
    return saveRace(race)
}


export const addPlayer = (player : Player, raceId : string) => {
    return saveAddPlayer(raceId, player);
}