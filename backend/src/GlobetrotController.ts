import { fetchRace, saveAddPlayer } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Player, Race, Task } from "./types";

export const getRace = (raceId : string) : Race | undefined => {
    return fetchRace(raceId);
}

//TODO
const generateTask = () => {
    return undefined
}

export const createRace = (numTasks : number, initializedTasks : { task : Task, order : number }[]) => {
    const tasks = Array(numTasks);
    initializedTasks.forEach(task => {
        tasks[task.order] = task.task;
    })
    tasks.map(task => {
        if (!task) {
            return generateTask();
        } else {
            return task;
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