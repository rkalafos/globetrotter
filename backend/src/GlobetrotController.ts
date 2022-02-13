import { fetchRace, saveAddPlayer } from "./GlobetrotService"
import { saveRace } from "./GlobetrotService";
import { v4 as uuidv4 } from 'uuid';
import { Player, Race, Task } from "./types";
import {generateTask} from "./googleApi";

export const getRace = async (raceId : string) : Promise<Race | undefined> => {
    return await fetchRace(raceId);
}

export const createRace = async (location :string, price_point: number, labels: string[]) => {

    const tasks = await Promise.all(labels.map(label => {
        return generateTask(label, price_point, location);
    }))

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
        players : [],
        price_point: price_point,
        location: location
    }

    const result = await saveRace(race);

    if (result) {
        return race;
    }

    return undefined;

    
}


export const addPlayer = (player : string, raceId : string) => {
    return saveAddPlayer(raceId, player);
}