// All the information about an individual Race
export interface Race {
	id: string;
	location: string;
	price_point: number;
	tasks: Task[];
	players: Player[];
}

// Describes information stored about a player
export interface Player {
	id: string;
	name: string;
}

// Place of interest
export interface POI {
	name?: string;
	vicinity?: string;
	formatted_address?: string;
	types?: string[];
	picture?: File;
}

// A task in the Race
export type Task = {
	pointOfInterest : POI,
	description : string,
}

export interface JoinResponse {
	raceId: string
}