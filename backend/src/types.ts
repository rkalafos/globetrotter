export interface Race {
	id: string;
	pointsOfInterest: POI[];
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

export interface Player {
	id: string;
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
	filledTasks: { order : number, task : Task }[]
}

// Effect -> Creates a session

// Response
export interface CreateRaceResponse {
	sessionId: string;
}

//BODY
export interface JoinRacePayload {
	sessionId: string;
	player: Player[]
}

// Effect -> Adds a player to the Race


// Response
// 204 No Content