export interface Race {
	id: string;
	location: string;
	price_point: number;
    tasks: Task[];
	players: Player[];
}

export type Location = string;

export type Task = {
    pointOfInterest : POI,
    description : string,
}

export interface CreateRacePayload{
    labels: string[],
	location: string,
	price_point: number
}

export interface POI {
	name?: string;
	vicinity?: string;
	formatted_address?: string;
	types?: string[];
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