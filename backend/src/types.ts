export interface Race {
	id: string;
    tasks: Task[];
	players: Player[];
}

export type Location = string;

export type Task = {
    pointOfInterest : POI,
    description : string,
}

export interface POI {
	name: string;
	location: Location;
	picture?: File;
}

export type Player = {
	id: number;
	name: string;
}

export interface GetRaceParams {
    id : string
}

export interface GetRaceResponse {
    tasks : Task[]
}

// BODY
export type CreateRacePayload = {
	numberOfTasks: number;
	filledTasks: Record<number, Task>
}

// Effect -> Creates a session

// Response
export interface CreateRaceResponse {
	sessionId: string;
}

//BODY
export interface JoinRacePayload {
	player: string
}

// Effect -> Adds a player to the Race


// Response
// 204 No Content