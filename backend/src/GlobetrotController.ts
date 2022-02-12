import { fetchRace, saveAddPlayer } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Player, Race, Task } from "./types";
import { exampleTasks } from "./examples";

export const getRace = (raceId : string) : Race | undefined => {
    return fetchRace(raceId);
}

export const createRace = (location :string, price_point: number, labels: string[]) => {
    const tasks = labels.map(label => {
        getLocation()
        return generateTask(label, location, price_point)
    })

   // const generatedTasks = exampleTasks.sort(() => 0.5 - Math.random()).slice(0, numTasks - Object.keys(initializedTasks).length);
   //
   //  tasks.map(task => {
   //      if (!task && !!generatedTasks.length) {
   //          return  generatedTasks.splice(0, 1)[0];
   //      } else {
   //          return undefined;
   //      }

    const race : Race = {
        id : uuidv4(),
        tasks : tasks,
        players : []
    }
    
    return saveRace(race)
}


export const addPlayer = (player : string, raceId : string) => {
    return saveAddPlayer(raceId, player);
}